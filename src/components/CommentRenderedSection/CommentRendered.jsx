import './CommentRendered.scss';
import { dateGenerator } from '../../Utilities/helper';

const CommentRendered = (props) => {
    
    const videoVariable = props.data;
    return (
        <>
            {videoVariable.comments !== undefined ? videoVariable.comments.map((comment, index) => {
                return(
                    <div key={index} className="postedCommentSection">
                        <div className="postedCommentSection__imageDiv">
                            <div className="postedCommentSection__imageDiv--image" alt="empty photo"></div>
                        </div>
                        <div className='postedCommentSection__textDiv'>
                            <div className="postedCommentSection__nameDateDiv">
                                <p className="postedCommentSection__nameDateDiv--name">{comment.name}</p>
                                <p className="postedCommentSection__nameDateDiv--date">{dateGenerator(comment.timestamp)}</p>
                            </div>
                            <p className="postedCommentSection__textDiv--text">{comment.comment}</p>
                        </div>
                    </div>
                    )
                }
            )
        : <></>}
        </>    
    )
}

export default CommentRendered