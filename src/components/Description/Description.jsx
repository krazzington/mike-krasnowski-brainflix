import './Description.scss';
//import dateGenerator from '../../Utilities';
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import {dateGenerator} from "../../Utilities/helper"

function Description({data}) {
    //const timestamp = dateGenerator(timestamp);

    return (
        <>
            <section className="description">
                <h2 className="h2Header">{data.title}</h2>
                <div className="detailsDiv">
                    <div className="nameDate">
                        <p className="nameDate__name"> by {data.channel}</p>
                        <p className="nameDate__date">{data.timestamp}</p>
                    </div>
                    <div className="viewsLikes">
                        <p className="viewsLikes__views"><img src={viewsIcon} alt="views icon" />{data.views}</p>
                        <p className="viewsLikes__likes"><img src={likesIcon} alt="likes icon" />{data.likes}</p>
                    </div>
                </div>
                <div className="descriptionDiv">
                    <p className="descriptionDiv__descriptionText">{data.description}</p>
                </div>
            </section>
        </>
    )
}

export default Description