import './Description.scss';

function Description() {
    return (
        <>
        <section className="description">
            <header className="description__header">BMX Rampage: 2021 Highlights</header>
            <div className="description__nameDate">
                <p className="description__nameDate--name">By Red Crow</p>
                <p className="description__nameDate--date">07/11/2021</p>
            </div>
            <div className="description__viewsLikes">
                <p className="description__viewsLikes--views"><img src="../../assets/icons/views.svg" alt="views icon" /></p>
                <p className="description__viewsLikes--likes"><img src="../../assets/icons/likes.svg" alt="likes icon" />Likes</p>
            </div>
            <div className="description__textDiv">
                <p className="description__textDiv--text">
                    On a gusty day in Southern Utah, a group of 25 
                    daring mountain bikers blew the doors off what 
                    is possible on two wheels, unleashing some of 
                    the biggest moments the sport has ever seen. 
                    While mother nature only allowed for one full run 
                    before the conditions made it impossible to ride, 
                    that was all that was needed for event veteran 
                    Kyle Strait, who won the event for the second 
                    time -- eight years after his first Red Cow 
                    Rampage title
                </p>
            </div>
        </section>
        </>
    )
}

export default Description