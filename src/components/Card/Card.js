import MyButton from '../MyButton/MyButton';
import css from './Card.module.css';

function Card() {
  // console.log('css ===', css);
  return (
    <div className={css.card}>
      <div className={css.info}>
        <h3>Levis</h3>
        <p className={css.date}>2022</p>
        <p className={css.text}>petras@petras.lt</p>
        <MyButton className={css.button}>VIEW LOG</MyButton>
        <MyButton secondary className={css.button}>DELETE</MyButton>
      </div>
    </div>
  );
}

export default Card;
