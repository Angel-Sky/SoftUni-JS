import style from './Main.module.css';
import Aside from '../Aside/Aside';
import Posts from '../Main/Posts/Posts'
import postService from '../../services/postService';

function Main({posts}) { 
    return (
        <main className={style.main}>
            <h1 className={style.mainHeading}>Sooooooooome heading</h1>
            <Posts posts = {posts}/>
        </main>
    );
}

export default Main;
