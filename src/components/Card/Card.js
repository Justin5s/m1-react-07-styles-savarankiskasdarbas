import MyButton from '../MyButton/MyButton';
import css from './Card.module.css';


function Card({id, name, date, email, cardDelete}) {
  // console.log('css ===', css);
  // const timestamp = new Date(date).parseInt(date);
  // new Date(date).toLocaleDateString()
  // var ds = d.toString('MM/dd/yy HH:mm:ss');
  return (
    <div className={css.card}>
      <div className={css.info}>
        <h3>{name}</h3>
        <p className={css.date}>{new Date(date).toLocaleDateString()}</p>
        <p className={css.text}>{email}</p>
        <MyButton className={css.button}>VIEW LOG</MyButton>
        <MyButton onclick={cardDelete} secondary className={css.button}>DELETE</MyButton>
      </div>
    </div>
  );
}

export default Card;
