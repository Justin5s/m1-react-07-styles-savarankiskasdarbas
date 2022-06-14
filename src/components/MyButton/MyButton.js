import css from './MyButton.module.css';

function MyButton(props) {
  // console.log('css ===', css);
  return <button className={`${css.btn} ${props.secondary ? css.secondary : null} ${props.className}`}>{props.children}</button>;
}

export default MyButton;
