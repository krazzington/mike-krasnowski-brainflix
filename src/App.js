import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Description from './components/Description/Description.jsx';
import CommentBox from './components/CreateCommentSection/CreateComment.jsx';
import data from './data/video-details.json';
import videoData from './data/videos.json';
import CommentRendered from './components/CommentRenderedSection/CommentRendered';
import NextVideo from './components/NextVideoSection/NextVideo';
import React from 'react';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      videoDetails: data[0],
      commentsData: data[0].comments,
      nextVidInfo: videoData,
    }
  }
 
  render(){
    
    return (
      <>
      <Header />
      <Hero data={this.state.videoDetails}/>
      <Description data={this.state.videoDetails}/>
      <CommentBox />
      <CommentRendered 
        data={this.state.commentsData}
      />
      <NextVideo data={this.state.nextVidInfo}/>
      </>
    );
  }
}

export default App;