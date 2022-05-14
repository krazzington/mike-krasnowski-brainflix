import './CreateComment.scss';
import add from '../../assets/icons/add_comment.svg';
import Mohan from '../../assets/images/Mohan-muruge.jpg';
import React from 'react';

function CommentBox() {
    return (
        <div className="commentBoxDiv">
            <p className="commentBoxDiv__numberOfComments">{} Comments</p>
            <div className="commentBoxDiv__commentSectionImageDiv">
                    <img className="commentBoxDiv__commentSectionImageDiv--image" src={Mohan} alt="add icon on button" />
            </div>
            <div className="commentBoxDiv__commentForm">    
                <p className="commentBoxDiv__commentForm--header">join the conversation</p>    
                <CommentForm  />
            </div>
        </div>
    )
}
export default CommentBox


class CommentForm extends React.Component {
    render() {
        return (
            <form className="commentForm__commentSectionForm">
                <input className="commentForm__commentSectionForm--commentSectionInput" type="text" placeholder="Add a new comment" />
                <button className="commentForm__commentSectionForm--commentSectionButton"><img src={add} alt="add icon on button" />Comment</button> 
            </form>
        )
    }
}