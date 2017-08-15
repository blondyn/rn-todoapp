import {
    ADD_ITEM,
    REMOVE_ITEM,
    MARK_ITEM,
    REMOVE_COMPLETED_ITEMS
} from './types';

const actions = {
    [ADD_ITEM]: (state, action) => {
        const newTodo = {text: action.payload, done: false, key: Date.now()};
        return {todos: [newTodo, ...state.todos]}
    },
    [REMOVE_ITEM]: (state, action) => {
        const newTodosState = state.todos.filter(todo => todo.key !== action.payload);
        return {todos: newTodosState};
    },
    [MARK_ITEM]: (state, action) => {
        const {key, checked} = action.payload;
        const newTodosState = state.todos.map((todo) => {
            if (todo.key === key) {
                return Object.assign({}, todo, {done: checked})
            }
            return todo;
        });
        return {todos: newTodosState};
    },
    [REMOVE_COMPLETED_ITEMS]: (state) => {
        const newTodosState = state.todos.filter(todo => !todo.done)
        return {todos: newTodosState}
    }
};

export default (state = {todos: []}, action) => {
    const reducer = actions[action.type];
    if (typeof reducer === 'function') {
        return reducer(state, action);
    }
    return state;
};
