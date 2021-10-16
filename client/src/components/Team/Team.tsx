import React from 'react';
import styles from './Team.module.css';

interface Info {
  //logo: String;
  name: String;
  status?: String;
  id?: string;
}

const Team: React.FC<Info> = ({ name, status = '', id }: Info): JSX.Element => {
  const [isMember, setIsMember] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isMember) {
      setIsMember(true);
    }
  };

  return (
    <div className={styles.teamCard}>
      <div className={styles.leftContainer}>
        {/* <img src={logo} alt="team logo" /> */}
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.name}>{name}</div>
        {status &&
          (isMember ? (
            <div className={styles.acceptStatus}>Team member</div>
          ) : (
            <div className={styles.pendingStatus} onClick={handleClick} id={id}>
              {status}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Team;
