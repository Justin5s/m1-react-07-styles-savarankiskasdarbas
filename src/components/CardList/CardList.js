import css from './CardList.module.css';
import React from 'react';
import MyButton from '../MyButton/MyButton';
import Card from '../Card/Card';


function CardList({data}) {
  return (
    <div className={`${css.container}`}>
      <h1>Pet list</h1>
      <div className={css.btncontainer}>
      <MyButton className={css.button}>ADD PET</MyButton>
      <div className={css.container} >
        {data.map((cards) => <Card/> ) }
      </div>
      </div>
    </div>
  );
}

export default CardList;
