import css from './CardList.module.css';
import React from 'react';
import MyButton from '../MyButton/MyButton';
import Card from '../Card/Card';

function CardList({ data }) {
  return (
    <div className={`${css.container}`}>
      <div className={css.btnContainer}>
        <h1>Pet list</h1>
        <MyButton className={css.button}>ADD PET</MyButton>
        {/* <div className={css.btnContainer}>
          <MyButton className={css.button}>ADD PET</MyButton>
        </div> */}
      </div>
      <div className={css.cardsContainer}>
        {data.map((cards) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

export default CardList;
