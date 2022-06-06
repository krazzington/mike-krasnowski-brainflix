import './Description.scss';
import { dateGenerator } from '../../Utilities/helper';
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";


function Description(props) {

    const videoVariable = props.data;
    
    return (
        <>
            <section className="description">
                <h2 className="description__h2Header">{videoVariable.title}</h2>
                <div className="description__detailsDiv">
                    <div className="detailsDiv__nameDate">
                        <p className="detailsDiv__nameDate--name"> by {videoVariable.channel}</p>
                        <p className="detailsDiv__nameDate--date">{dateGenerator(videoVariable.timestamp)}</p>
                    </div>
                    <div className="detailsDiv__viewsLikes">
                        <p className="detailsDiv__viewsLikes--views"><img src={viewsIcon} alt="views icon" />{videoVariable.views}</p>
                        <p className="detailsDiv__viewsLikes--likes"><img src={likesIcon} alt="likes icon" />{videoVariable.likes}</p>
                    </div>
                </div>
                <div className="descriptionDiv">
                    <p className="descriptionDiv__descriptionText">{videoVariable.description}</p>
                </div>
            </section>
        </>
    )
}

export default Description