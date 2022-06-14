import css from './Header.module.css';

function Header() {
  return (

      <header className={css.header}>
        <nav className='main-nav'>
          <a className={css['nav-link']} href='#home'>
            Vetbee
          </a>
        </nav>
        <nav className='main-nav'>
          <a className={css['nav-link']} href='#pets'>
            pets
          </a>
          <a className={css['nav-link']} href='#medications'>
            medications
          </a>
        </nav>
      </header>

  );
}

export default Header;
