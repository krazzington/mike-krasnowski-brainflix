import './NextVideo.scss';
import videosList from '../../data/videos.json';

const NextVideo = (props) => {
    
    const clickHandler = (id) => {
        props.videoData(id);
    }
    const nextVideoFilter = videosList.filter(videos => videos.id !== props.data);
    const newNextVideo = nextVideoFilter.map((nextVideos, index) => {
        return (
            <div key={index} onClick={() => clickHandler(nextVideos.id)} className='nextVidSectionDiv'>
                <img className='nextVidSectionDiv__videoImage' src={nextVideos.image} alt=''></img>
                <div className='nextVidSectionDiv__titleChannelDiv'>
                    <p className='nextVidSectionDiv__titleChannelDiv--videoTitle'>{nextVideos.title}</p>
                    <p className='nextVidSectionDiv__titleChannelDiv--videoChannel'>{nextVideos.channel}</p>
                </div>
            </div>      
        )
    }
    )
    return(
        <div className='nextVidSection'>
            <p className='nextVidSection__nextVidSectionHeader'>Next Video</p>
            <div>
                {newNextVideo}
            </div>
        </div>
    )
}

export default NextVideo