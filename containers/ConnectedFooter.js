import {connect} from 'react-redux';
import Footer from '../components/Footer';
import {REMOVE_COMPLETED_ITEMS} from '../state/types';

const mapStateToProps = todos => ({todos});
const mapDispatchToProps = dispatch => {
    return {
        removeCompletedItems() {
            dispatch({type: REMOVE_COMPLETED_ITEMS})
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);