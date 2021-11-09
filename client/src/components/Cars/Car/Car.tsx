import React from 'react';
import styles from './Car.module.css';

interface CarInterface {
  id: number;
  name: string;
  team: string;
  image?: string;
  imageAlt: string;
}
interface Props {
  car: CarInterface;
}

const Car: React.FC<Props> = ({ car }: Props): JSX.Element => {
  return (
    <div>
      <div className={styles.carCard}>
        <img className={styles.cardImg} src={car.image} alt={car.imageAlt} />
        <div className={styles.carTitle}>{car.name}</div>
        <div className={styles.carTeam}>{car.team}</div>
      </div>
    </div>
  );
};

export default Car;
