import './CreateComment.scss';
import add from '../../assets/icons/add_comment.svg';
import Mohan from '../../assets/images/Mohan-muruge.jpg';
import React from 'react';

function CommentBox() {
    return (
        <div className="commentBoxDiv">    
            <div className="commentBoxDiv__numberOfComments">
                <p className="commentBoxDiv__numberOfComments--number">{} Comments</p>
            </div>
            <div className="commentBoxDiv__header">
                <h3 className="commentBoxDiv__header--text">join the conversation</h3>
            </div>
            <div className="commentBoxDiv__commentSectionImageDiv">
                <img className="commentSectionImageDiv__image" src={Mohan} alt="add icon on button" />
            </div>
            <CommentForm />
        </div>
    )
}
export default CommentBox


class CommentForm extends React.Component {
    render() {
        return (
            <form className="commentBoxDiv__commentSectionForm">
                <input className="commentSectionInput" type="text" placeholder="Add a new comment" />
                <button className="commentSectionButton"><img src={add} alt="add icon on button" />Comment</button> 
            </form>
        )
    }
}