import './Description.scss';

function Description({data}) {
    

    return (
        <>
        <section className="description">
            <h2 className="description__header">{data.title}</h2>
            <div className="nameDate">
                <p className="nameDate__name">{data.channel}</p>
                <p className="nameDate__date">{data.timestamp}</p>
            </div>
            <div className="viewsLikes">
                <p className="viewsLikes__views"><img src="../../assets/icons/views.svg" alt="views icon" />{data.views}</p>
                <p className="viewsLikes__likes"><img src="../../assets/icons/likes.svg" alt="likes icon" />{data.likes}</p>
            </div>
            <div className="descriptionDiv">
                <p className="descriptionDiv__descriptionText">{data.description}</p>
            </div>
        </section>
        </>
    )
}

export default Description