import css from './CardList.module.css';
import React from 'react';
import MyButton from '../MyButton/MyButton';
import Card from '../Card/Card';




function CardList({ data, cardDelete }) {
  console.log('data ===', data);
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
          <Card cardDelete={ () => cardDelete(cards.id)} 
          key={cards.id} 
          name={cards.name} 
          date={cards.dob} 
          email={cards.client_email} />
        ))}
      </div>
    </div>
  );
}

export default CardList;

// key={tObj.id}
// {...tObj}
// onDelete={props.onDelete}
// onToggle={props.onToggle}
// onEdit={props.onEdit}
