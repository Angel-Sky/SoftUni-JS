import { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import postService from './services/postService'
import style from './App.module.css';
import Header from './components/Header/Header'
import Main from './components//Main/Main'
import Aside from './components/Aside/Aside'

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         posts: []
      }
   }

   async componentDidMount() {
      try {
         let posts = await postService.getAll()
         this.setState({ posts });
      } catch (error) {
         console.error(error);
      }
   }

   render() {
      return (
         <div className={style.app}>
            <Header />
            <div className={style.container}>
               <Aside />
               <Switch>
                  <Route path="/" exact>
                     <Main posts={this.state.posts} />
                  </Route>
                  <Route path="/about" render={() => <h1>About us</h1>} />
                  <Route path="/contacts" render={() => <h1>Contact us</h1>} />
               </Switch>
            </div>
         </div>
      );
   }


}

export default App;
