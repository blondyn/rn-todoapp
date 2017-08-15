import {
    ADD_ITEM,
    REMOVE_ITEM,
    MARK_ITEM,
    REMOVE_COMPLETED_ITEMS
} from './types';

const actions = {
    [ADD_ITEM]: (state, action, clock) => {
        const newTodo = {text: action.payload, done: false, key: clock.now()};
        return [newTodo, ...state]
    },
    [REMOVE_ITEM]: (state, action) => {
        return state.filter(todo => todo.key !== action.payload);
    },
    [MARK_ITEM]: (state, action) => {
        const {key} = action.payload;
        return state.map((todo) => {
            if (todo.key === key) {
                return {...todo, done: !todo.done}
            }
            return todo;
        });
    },
    [REMOVE_COMPLETED_ITEMS]: (state) => {
        return state.filter(todo => !todo.done)
    }
};

export default (state = [], action, clock = Date) => {
    const reducer = actions[action.type];
    if (typeof reducer === 'function') {
        return reducer(state, action, clock);
    }
    return state;
};
