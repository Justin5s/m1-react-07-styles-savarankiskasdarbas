import './App.css';
import Card from './components/Card/Card';
import CardList from './components/CardList/CardList';
import Header from './components/header/Header';
import MyButton from './components/MyButton/MyButton';

function App() {
  return (
    <div className='App'>
      <Header />
      <CardList data={[1, 2, 3]} />

    </div>
  );
}

export default App;