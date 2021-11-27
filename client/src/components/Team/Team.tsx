import React from 'react';
import styles from './Team.module.css';

interface Info {
  //logo: String;
  name: string;
  status?: string;
  id?: string;
  logo?: string;
  isMember?: boolean;
  setIsMember?: (isMember: boolean) => void;
}

const Team: React.FC<Info> = ({
  name,
  status,
  id,
  logo,
  isMember,
  setIsMember,
}: Info): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isMember) {
      if (setIsMember != null) {
        setIsMember(true);
      }
    }
  };

  return (
    <div className={styles.teamCard}>
      <div className={styles.leftContainer}>
        {logo && (
          <img
            src={`images/${logo}.png`}
            alt="team logo"
            className={styles.imgLogo}
          />
        )}
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
