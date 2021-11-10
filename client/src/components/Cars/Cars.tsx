import React, { useState } from 'react';
import styles from './Cars.module.css';
import Car from './Car/Car';
import CardPlaceholder from '../CardPlaceholder/CardPlaceholder';
import AddCard from '../AddCard/AddCard';
import { v4 as uuidv4 } from 'uuid';
// import img_mcqueen from '../../public/lightning-mcqueen.png'
// import img_rb17 from '../../public/rb17.jpg'

interface Prop {
  isMember: boolean;
}

const Cars: React.FC<Prop> = ({ isMember }): JSX.Element => {
  const [carView, setCarView] = useState<Boolean>(false);

  const cars = [
    {
      id: 1,
      name: 'Lightning Mcqueen',
      team: 'Kachow Team',
      image: require('./../../assets/lightning-mcqueen.png').default,
      imageAlt: 'mcqueen',
    },
    {
      id: 2,
      name: 'RB21-E',
      team: 'Redback Racing',
      image: require('./../../assets/rb17.jpg').default,
      imageAlt: 'rb17',
    },
  ];
  const carsList = cars.map((car) => <Car key={uuidv4()} car={car}></Car>);
  carsList.push(<AddCard className={styles.addCard} displayText={'car'} />);

  const carVisibilityHandler = (e: React.MouseEvent<HTMLSpanElement>): void => {
    if (!isMember) {
      alert('Please accept the invitation first.');
    } else {
      setCarView(true);
    }
  };

  return (
    <div className={styles.root}>
      <div></div>

      <div className={styles.carsContainer}>
        <h2 className={styles.leftAlign}>MY CARS</h2>
        {carView ? (
          <div className={styles.carsWrapper}>
            {carsList}
            {/* <AddCard displayText={"car"}/> */}
          </div>
        ) : (
          <CardPlaceholder
            displayText={'car'}
            visibilityHandler={carVisibilityHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Cars;
