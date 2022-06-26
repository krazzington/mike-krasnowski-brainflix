import './Upload.scss';
import Header from '../../components/Header/Header';
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import React from 'react';
import axios from "axios";

const toServer = 'http://localhost:8080/videos';

class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videoUpload: [],
        };
    }
    componentDidMount() {
        axios.get(toServer)
        .then((res) => {
            if(res.data){
                this.setState({
                    videoUpload: res.data
                })
            }
        })
    }
    uploadVideo = (e, title, description) => {
        e.preventDefault();
        axios({
            url: toServer,
            method: 'POST',
            data: {
                title, description
            },
            headers: {'Content-Type': 'application/json'}
        }).then((response) => {
            this.setState({
                videoUpload: response.data
            })
        })
    }

    handleSubmit = (e) => {
        const title = e.target.title.value;
        const description = e.target.description.value;
        this.uploadVideo(e, title, description)
    }

        render(){
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
                        <form onSubmit={this.handleSubmit}> 
                            <label className='uploadVidDiv__right--label'>title your video</label><br />
                            <input className='uploadVidDiv__right--input' name="title" placeholder='Add a title to your video' type="text"></input>
                            <label className='uploadVidDiv__right--label'>add a video description</label><br />
                            <input className='uploadVidDiv__right--input' name="description" placeholder='Add a description to your video' type="textarea"></input>
                            <button className='uploadVidDiv__rightTablet uploadVidDiv__right--pubButton'>PUBLISH</button>
                            <button className='uploadVidDiv__rightTablet uploadVidDiv__right--cancelButton'>CANCEL</button>
                        </form>
                    </div>
                </div>
                </>
            )
        }
    }


// apiAddVideoDetails = (e, title, description) => {
//     e.preventDefault();

//     //fs.write - json needs to be put on  file on a disk - each time modifying data store
//     axios({
//         url: videosBackEnd,
//         method: 'POST',
//         data: { title, description, image:"http://localhost:8080/image/image0.jpeg" },
//         headers: { 'Content-Type': 'application/json' }
//       }).then((response) => {
//         this.setState({ students: response.data });
//       });
// };

export default Upload;