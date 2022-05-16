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
            <section className="description desktop desktop__left">
                <div className="desktop__left">
                <h2 className="description__h2Header">{videoData.title}</h2>
                <div className="description__detailsDiv">
                    <div className="detailsDiv__nameDate">
                        <p className="detailsDiv__nameDate--name"> by {videoData.channel}</p>
                        <p className="detailsDiv__nameDate--date">{dateGenerator(videoData.timestamp)}</p>
                    </div>
                    <div className="detailsDiv__viewsLikes">
                        <p className="detailsDiv__viewsLikes--views"><img src={viewsIcon} alt="views icon" />{videoData.views}</p>
                        <p className="detailsDiv__viewsLikes--likes"><img src={likesIcon} alt="likes icon" />{videoData.likes}</p>
                    </div>
                </div>
                <div className="descriptionDiv">
                    <p className="descriptionDiv__descriptionText">{videoData.description}</p>
                </div>
                </div>
            </section>
        </>
    )
}

export default Description