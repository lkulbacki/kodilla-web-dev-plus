import {connect} from 'react-redux';
import Comment from './Comment';
import {upvoteComment, downvoteComment} from './actions';

const mapDispatchToProps = dispatch => ({
    upvoteComment: (id) => dispatch(upvoteComment(id)),
    downvoteComment: (id) => dispatch(downvoteComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);
