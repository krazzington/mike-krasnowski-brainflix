import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Description from './components/Description/Description.jsx';
import data from './data/video-details.json';
import React from 'react';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      videoDetails: data[0],
    }
  }
 
  render(){
    console.log(data);
    return (
      <>
      <Header />
      <Hero data={this.state.videoDetails}/>
      <Description data={this.state.videoDetails}/>
      </>
    );
  }
}

export default App;
