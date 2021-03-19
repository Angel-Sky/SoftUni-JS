import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'


function App() {
  return (
    <div className="container">
      <Header username="Pesho"/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
