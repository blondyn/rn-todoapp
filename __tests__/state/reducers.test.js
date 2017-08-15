import reducer from './../../state/reducers';

describe('todo reducer', () => {
    it('should handle initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    });
    it('should handle ADD_ITEM action', () => {
        const clock = {
            now() {
                return 0;
            }
        };
        expect(reducer(undefined,
            {type: 'ADD_ITEM', payload: 'new item'}, clock)
        ).toEqual(
            [
                {
                    text: 'new item',
                    key: 0,
                    done: false
                }
            ]
        )
    });

    it('should handle REMOVE_ITEM action', () => {
        expect(reducer(
            [
                {text: 'new item', key: 747, done: false}
            ],
            {type: 'REMOVE_ITEM', payload: 747}))
            .toEqual([])
    });

    it('should handle MARK_ITEM action when unchecked', () => {
        expect(reducer(
            [
                {text: 'new item', key: 747, done: false}
            ],
            {type: 'MARK_ITEM', payload: {key: 747}})
        ).toEqual(
            [
                {text: 'new item', key: 747, done: true}
            ]
        )
    });

    it('should handle MARK_ITEM action when checked', () => {
        expect(reducer(
            [
                {text: 'new item', key: 747, done: true}
            ],
            {type: 'MARK_ITEM', payload: {key: 747}})
        ).toEqual(
            [
                {text: 'new item', key: 747, done: false}
            ]
        )
    });

    it('should handle REMOVE_COMPLETED_ITEMS action', () => {
        expect(reducer(
            [
                {text: 'new item', key: 707, done: true},
                {text: 'new item 2', key: 737, done: false},
                {text: 'new item 3', key: 747, done: true}
            ],
            {type: 'REMOVE_COMPLETED_ITEMS',})
        ).toEqual(
            [
                {text: 'new item 2', key: 737, done: false},
            ]
        )
    });


});