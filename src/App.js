import './App.css';
import Page from './pages/Page/Page';
import React from 'react';
import Upload from '../src/pages/Upload/Upload'
import ErrorPage from './components/ErrorPage/ErrorPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render(){
    
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Page}></Route>
          <Route path="/videos/:id" component={Page}></Route>
          <Route path="/videoUpload" component={Upload}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;