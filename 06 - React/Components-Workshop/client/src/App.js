import { Component } from 'react';
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
               <Main posts={this.state.posts} />
            </div>
         </div>
      );
   }


}

export default App;
