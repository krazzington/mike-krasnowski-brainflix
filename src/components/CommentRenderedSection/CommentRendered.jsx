import './CommentRendered.scss';
import { dateGenerator } from '../../Utilities/helper';

const CommentRendered = (props) => {

    return (
    <>
        {props.data.map((comment, index) => {
            return(
                <div key={index} className="postedCommentSection">
                    <div className="postedCommentSection__imageDiv">
                        <div className="postedCommentSection__image" alt="empty photo"></div>
                    </div>
                    <div className="postedCommentSection__nameDateDiv">
                        <p className="postedCommentSection__name">{comment.name}</p>
                        <p className="postedCommentSection__date">{dateGenerator(comment.timestamp)}</p>
                    </div>
                    <p className="postedCommentSection__textDiv">{comment.comment}</p>
                </div>
            )
            }
        )}
        </>    
    )
}

export default CommentRendered