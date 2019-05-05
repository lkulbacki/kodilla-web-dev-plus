import {addComment} from "./actions";
import AddCommentWidget from "./AddCommentWidget";
import { connect } from "react-redux";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    addComment: text => dispatch(addComment(text))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCommentWidget);
