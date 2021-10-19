import React from 'react';
import { Typography } from '@mui/material';
import styles from './Team.module.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Team from './Team';

const teams = [
  {
    logo: 'redback',
    name: 'Redback Racing',
    status: 'Accept invite',
  },
];
const Teams = (): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.root}>
        <Typography className={styles.title}>TEAMS</Typography>
        {teams.map((team, idx) => {
          return (
            <Team
              name={team.name}
              status={team.status}
              logo={team.logo}
              key={idx}
            />
          );
        })}
        <Team name="Start a team..." />
      </div>
    </StyledEngineProvider>
  );
};

export default Teams;
