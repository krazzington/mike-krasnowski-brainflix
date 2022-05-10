import './CreateComment.scss';
import add from '../../assets/icons/add_comment.svg';
import Mohan from '../../assets/images/Mohan-muruge.jpg';
import React from 'react';

function CommentBox() {
    return (
        <div className="commentBoxDiv">    
            <p className="commentBoxDiv__numberOfComments">{} Comments</p>
            <h3 className="commentBoxDiv__header">join the conversation</h3>
            <div className="commentSectionImage">
                <img className="commentSectionImage__image" src={Mohan} alt="add icon on button" />
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