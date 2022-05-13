import './NextVideo.scss';

const NextVideo = (props) => {
    
    return (
            <>      
                <div className='nextVidSection'>
                        <p className='nextVidSectionHeader'>Next Video</p>
                        {props.data.filter((heroVideo, id) => id>0).map(video => 
                        <div key={video.id} className='nextVidSectionDiv'>
                            <img className='nextVidSectionDiv__videoImage' src={video.image} alt=''></img>
                            <div className='nextVidSectionDiv__titleChannelDiv'>
                                <p className='nextVidSectionDiv__titleChannelDiv--videoTitle'>{video.title}</p>
                                <p className='nextVidSectionDiv__titleChannelDiv--videoChannel'>{video.channel}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default NextVideo