import style from './App.module.css';
import Header from './components/Header/Header'
import Main from './components//Main/Main'
import Aside from './components/Aside/Aside'

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.container}>
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
