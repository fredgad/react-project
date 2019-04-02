import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import News from './components/News/News';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Route path='/Dialogs' render={() => <Dialogs
          correspond={props.store.getState().correspond} 
          messageText={props.store.getState().messageText} 
          dispatch={props.store.dispatch.bind(props.store)} />} />

        <Route path='/Profile' render={() => <Profile
          postData={props.store.getState().postData}
          areaText={props.store.getState().areaText}
          dispatch={props.store.dispatch.bind(props.store)} />} />

        <Route path='/Friends' render={() => <Friends friends={props.store.getState().friends} />} />
        <Route path='/News' render={() => <News />} />
      </div>
    </div>
  );
}

export default App;


