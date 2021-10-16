import './App.css';
import Car from 'components/Car/Car';
import Navbar from 'components/Navbar/Navbar';
import Profile from 'components/Profile/Profile';
import Teams from 'components/Team/Teams';
import TrackDay from 'components/TrackDay/TrackDay';
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
          <Car />
          <TrackDay />
        </div>
      </div>
    </div>
  );
}

export default App;
