import React from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions/index';

const CommentList = (props) => {
    const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
    return (
        <ul className="comment-list">{list}</ul>
    );
};

function mapStateToProps(state){
    return {comments: state.comments};
}
export default connect(mapStateToProps, { saveComment })(CommentList);