import './Hero.scss';
import videoDetails from '../../data/video-details.json';
import play from '../../assets/icons/play.svg';
//import scrub from '../../assets/icons/scrub.svg';
import volume from '../../assets/icons/volume_up.svg';
import fullscreen from '../../assets/icons/fullscreen.svg';


function Hero(props) {

    const videoVariable = props.data;
    
    return (
        <>
        <main className="main">
            <div className="video">
            <video className="video__player" width="100%" src={videoVariable.video} poster={videoVariable.image}>
            </video>
            <div className='controlsDiv'>
                <div className='controlsDiv__playDiv'>
                    <img className='controlsDiv__playDiv--play' src={play} alt='play button'/>
                </div>
                <div className='controlsDiv__scrollDiv'>
                    <div className='controlsDiv__scrollDiv--scroll'></div>
                    <p className='controlsDiv__scrollDiv--time'>0:00 / {videoVariable.duration}</p>
                </div>
                <div className='controlsDiv__fscreenVol'>
                        <img className='controlsDiv__fscreenVol--fullscreen' src={fullscreen} alt='fullscreen button'/>
                        <img className='controlsDiv__fscreenVol--volume' src={volume} alt='volume button'/>
                    </div>
            </div>
            </div>
            

        </main>
        </>
    )
}

export default Hero