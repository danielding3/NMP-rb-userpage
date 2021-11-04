import './App.css';
import Cars from './components/Cars/Cars';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Teams from './components/Team/Teams';
import TrackDays from './components/TrackDays/TrackDays';
function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="leftContainer">
          <Profile />
          <Teams />
        </div>
        <div className="rightContainer">
          <Cars />
          <TrackDays />
        </div>
      </div>
    </div>
  );
}

export default App;
