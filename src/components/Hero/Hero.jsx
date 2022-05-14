import './Hero.scss';
import videoDetails from '../../data/video-details.json';
import play from '../../assets/icons/play.svg';
//import scrub from '../../assets/icons/scrub.svg';
import volume from '../../assets/icons/volume_up.svg';
import fullscreen from '../../assets/icons/fullscreen.svg';

function Hero(props) {

    const videoVariable = props.data;
    const videoData = videoDetails.find(video => video.id === videoVariable);
    return (
        <>
        <main className="main video">
            <video className="video__player" width="100%" src={videoData.video} poster={videoData.image}>
            </video>
            <div className='controlsDiv'>
                <div className='controlsDiv__playDiv'>
                    <img className='controlsDiv__playDiv--play' src={play} alt='play button'/>
                </div>
                <div className='controlsDiv__scrollDiv'>
                    {/*<img className='controlsDiv__scrollDiv--scrub' src={scrub} alt='scrub button'/>*/}
                    <p className='controlsDiv__scrollDiv--scroll'></p>
                    <p className='controlsDiv__scrollDiv--time'>0:00 / 4:01</p>
                </div>
                <div className='controlsDiv__fscreenVol'>
                        <img className='controlsDiv__fscreenVol--fullscreen' src={fullscreen} alt='fullscreen button'/>
                        <img className='controlsDiv__fscreenVol--volume' src={volume} alt='volume button'/>
                    </div>
            </div>
        </main>
        </>
    )
}

export default Hero