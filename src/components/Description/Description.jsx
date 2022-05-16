import './Description.scss';
import { dateGenerator } from '../../Utilities/helper';
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import videoDetails from '../../data/video-details.json';

function Description(props) {

    const videoVariable = props.data;
    const videoData = videoDetails.find(video => video.id === videoVariable);
    return (
        <>
            <section className="description">
                <h2 className="h2Header">{videoData.title}</h2>
                <div className="detailsDiv">
                    <div className="nameDate">
                        <p className="nameDate__name"> by {videoData.channel}</p>
                        <p className="nameDate__date">{dateGenerator(videoData.timestamp)}</p>
                    </div>
                    <div className="viewsLikes">
                        <p className="viewsLikes__views"><img src={viewsIcon} alt="views icon" />{videoData.views}</p>
                        <p className="viewsLikes__likes"><img src={likesIcon} alt="likes icon" />{videoData.likes}</p>
                    </div>
                </div>
                <div className="descriptionDiv">
                    <p className="descriptionDiv__descriptionText">{videoData.description}</p>
                </div>
            </section>
        </>
    )
}

export default Description