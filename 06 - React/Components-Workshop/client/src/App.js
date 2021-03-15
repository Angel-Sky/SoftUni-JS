import style from './App.module.css';
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'

function App() {
  return (
    <div className={style.app}>
      <Header/>
      <Aside />
    </div>
  );
}

export default App;
