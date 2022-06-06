import './NextVideo.scss';
import { Link } from 'react-router-dom';

const NextVideo = (props) => {
    
    const videoVariable = props.data;
    const newNextVideo = videoVariable.filter(videos => videos.id !== props.videoId).map((nextVideos, index) => {
        return (
            <Link to={`/videos/${nextVideos.id}`}>
                <div key={index} className='nextVidSectionDiv'>
                    <img className='nextVidSectionDiv__videoImage' src={nextVideos.image} alt=''></img>
                    <div className='nextVidSectionDiv__titleChannelDiv'>
                        <p className='nextVidSectionDiv__titleChannelDiv--videoTitle'>{nextVideos.title}</p>
                        <p className='nextVidSectionDiv__titleChannelDiv--videoChannel'>{nextVideos.channel}</p>
                    </div>
                </div>
            </Link>
        )
    }
    )
    return(
        <div className='nextVidSection desktop desktop__right'>
            <p className='nextVidSection__nextVidSectionHeader'>Next Video</p>
            <div>
                {newNextVideo}
            </div>
        </div>
    )
}

export default NextVideo;