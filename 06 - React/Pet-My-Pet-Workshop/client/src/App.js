import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="container">
      <Header username="Pesho" />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/categories/:category" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
