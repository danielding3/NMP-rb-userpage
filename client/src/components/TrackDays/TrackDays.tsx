import styles from './TrackDays.module.css';
import React, { useState } from 'react';
import TrackDay from './TrackDay/TrackDay';
import CardPlaceholder from '../CardPlaceholder/CardPlaceholder';
import { v4 as uuidv4 } from 'uuid';
import TrackDayHeader from './TrackDay/TrackDayHeader';

interface Prop {
  isMember: boolean;
}

const TrackDays: React.FC<Prop> = ({ isMember }) => {
  const [showTrackDays, setShowTrackDays] = useState(false);
  const trackdays = [
    {
      date: '2021-10-08',
      car: 'RB21-E',
      location: 'SMSP',
      team: 'Redback Racing',
    },
    {
      date: '2021-10-09',
      car: 'Lightning Mcqueen',
      location: 'Piston Cup',
      team: 'Kachow Team',
    },
  ];

  const trackdaysMap = trackdays.map((trackday) => (
    <TrackDay key={uuidv4()} trackday={trackday} />
  ));
  const trackDayVisibilityHandler = (): void => {
    if (!isMember) {
      alert('Please accept the invitation first.');
    } else {
      setShowTrackDays(true);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2>upcoming track days</h2>
        {showTrackDays ? (
          <div>
            <TrackDayHeader />
            {trackdaysMap}
          </div>
        ) : (
          <CardPlaceholder
            displayText="trackday"
            visibilityHandler={trackDayVisibilityHandler}
          />
        )}
      </div>
    </div>
  );
};

export default TrackDays;
