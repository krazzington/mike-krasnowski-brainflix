import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Description from './components/Description/Description.jsx';
import CommentBox from './components/CreateCommentSection/CreateComment.jsx';
import data from './data/video-details.json';
import CommentRendered from './components/CommentRenderedSection/CommentRendered';
import NextVideo from './components/NextVideoSection/NextVideo';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      videoDetails: data[0].id,
    }
  }

  newVideoFunction = (id) => {
        this.setState({
        videoDetails: id,
      }
    )
  }

  render(){
    
    return (
      <BrowserRouter>
        <Route>
          <Header />
          <Hero data={this.state.videoDetails}/>
          <Description data={this.state.videoDetails}/>
          <CommentBox data={this.state.videoDetails}/>
          <CommentRendered 
            data={this.state.videoDetails}
          />
          <NextVideo 
            data={this.state.videoDetails}
            videoData={this.newVideoFunction}
          />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;