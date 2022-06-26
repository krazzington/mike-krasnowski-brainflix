import './Page.scss';
import Header from '../../components/Header/Header.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import CommentBox from '../../components/CreateCommentSection/CreateComment.jsx';
import CommentRendered from '../../components/CommentRenderedSection/CommentRendered';
import NextVideo from '../../components/NextVideoSection/NextVideo';
import React from 'react';
import Description from '../../components/Description/Description';
import axios from 'axios';

// const videosAPI = "https://project-2-api.herokuapp.com/videos";
// const APIKey = "?api_key=767ab1ec-0aae-47d0-8c0b-e0bd8672ce94";
const videosBackEnd = "http://localhost:8080/videos";

// const APIConcat = videosAPI + APIKey;


class Page extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            videoDetails: {},
            nextVideos: [] 
        }
    }

    apiCallNextVideos = () => {
        axios.get(videosBackEnd)
        .then((response)=>{
        console.log(response.data)    
            if(response.data){
                this.setState({
                    nextVideos: response.data
                })
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    APICallVideoDetails = (id) => {
        axios.get(videosBackEnd + '/' + id)
        .then((response)=>{
            if(response.data){
                this.setState({
                    videoDetails: response.data
                })
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }    

    componentDidMount = () => {
        this.apiCallNextVideos();
        this.APICallVideoDetails("84e96018-4022-434e-80bf-000ce4cd12b8");
    }

    componentDidUpdate = () => {
        if(this.state.videoDetails.id !== this.props.match.params.id){
            this.APICallVideoDetails(this.props.match.params.id)
        }
    }

    render(){
        if (this.state.videoDetails) {//(Object.keys(this.state.videoDetails).length > 0){
        return (
            <>
                <Header />
                <Hero data={this.state.videoDetails}/>
                <div className='desktop'>
                    <div className='desktop__left'>
                <Description data={this.state.videoDetails}/>
                <CommentBox data={this.state.videoDetails}/>
                <CommentRendered 
                    data={this.state.videoDetails}
                />
                    </div>
                    <div className='desktop__right'>
                <NextVideo
                data={this.state.nextVideos}
                videoId={this.state.videoDetails.id}
                />
                    </div>
                </div>
            </>
        );
        }
    }
}

export default Page;