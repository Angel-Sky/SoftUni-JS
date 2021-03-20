import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Details from './components/Details/Details'

function App() {
  return (
    <div className="container">
      <Header username="Pesho" />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/categories/:category" component={Home} />
        <Route path="/pets/details/:id" component={Details} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
