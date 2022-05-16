import './CreateComment.scss';
import add from '../../assets/icons/add_comment.svg';
import Mohan from '../../assets/images/Mohan-muruge.jpg';
import React from 'react';
import videoDetails from '../../data/video-details.json';

function CommentBox(props) {

    const videoVariable = props.data;
    const videoData = videoDetails.find(video => video.id === videoVariable);
    return (
        <div className="commentBoxDiv desktop desktop__left">
            <div className="desktop__left">
            <div className="commentBoxDiv__numberOfComments">
                <p className="commentBoxDiv__commentAmount">{videoData.comments.length} Comments</p>
            </div>
            <div  className="commentBoxDiv__commentMainDiv">
                <div className="commentMainDiv__commentSectionImageDiv">
                    <img className="commentMainDiv__image" src={Mohan} alt="add icon on button" />
                </div>
                <div className="commentMainDiv__commentSectionForm">    
                    <p className="commentMainDiv__commentSectionForm--header">join the conversation</p>    
                        <CommentForm  />
                </div>
            </div>
            </div>
        </div>
    )
}
export default CommentBox


class CommentForm extends React.Component {
    render() {
        return (
            <form className="commentMainDiv__commentSectionForm">
                <input className="commentMainDiv__commentSectionForm--commentSectionInput" type="textarea" placeholder="Add a new comment" />
                <button className="commentMainDiv__commentSectionForm--commentSectionButton"><img src={add} alt="add icon on button" />Comment</button> 
            </form>
        )
    }
}