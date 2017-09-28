import {connect} from 'react-redux'
import Todos from '../components/Todos'
import {REMOVE_ITEM, MARK_ITEM, ADD_ITEM} from "../state/types";

const mapStateToProps = state => {
    return {todos: state}
};
const mapDispatchToProps = dispatch => {
    return {
        removeItem({key}) {
            dispatch({type: REMOVE_ITEM, payload: key});
        },
        checkboxPressed({key, checked}) {
            dispatch({type: MARK_ITEM, payload: {key, checked}});
        },
        onSubmit(value) {
            dispatch({type: ADD_ITEM, payload: value});
        }
    }
};

const VisibleTodos = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);


export default VisibleTodos;