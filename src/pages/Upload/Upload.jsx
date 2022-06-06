import './Upload.scss';
import Header from '../../components/Header/Header';
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";

const Upload = () => {
    return (
        <>
        <Header />
        <div className='uploadVidDiv'>
            <div className='uploadVidDiv__left'>
                <h2 className='uploadVidDiv__left--h2'>Upload Video</h2>
                <p className='uploadVidDiv__left--para'>video thumbnail</p>
                <img className='uploadVidDiv__left--image'src={Thumbnail}></img>
                </div>
            <div className='uploadVidDiv__right'>
                <form>
                    <label className='uploadVidDiv__right--label'>title your video</label><br />
                    <input className='uploadVidDiv__right--input' placeholder='Add a title to your video' type="text"></input>
                    <label className='uploadVidDiv__right--label'>add a video description</label><br />
                    <input className='uploadVidDiv__right--input' placeholder='Add a description to your video' type="text"></input>
                </form>
                <button className='uploadVidDiv__rightTablet uploadVidDiv__right--pubButton'>PUBLISH</button>
                <button className='uploadVidDiv__rightTablet uploadVidDiv__right--cancelButton'>CANCEL</button>
            </div>
        </div>
        </>
    )
}

export default Upload;