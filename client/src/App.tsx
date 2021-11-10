import React from 'react';
import './App.css';
import Cars from './components/Cars/Cars';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Teams from './components/Team/Teams';
import TrackDays from './components/TrackDays/TrackDays';
function App(): JSX.Element {
  const [isMember, setIsMember] = React.useState(false);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="leftContainer">
          <Profile />
          <Teams isMember={isMember} setIsMember={setIsMember} />
        </div>
        <div className="rightContainer">
          <Cars isMember={isMember} />
          <TrackDays isMember={isMember} />
        </div>
      </div>
    </div>
  );
}

export default App;
