import style from './Main.module.css';
import Aside from '../Aside/Aside';
import Posts from '../Main/Posts/Posts'

function Main() {
    return (
        <main className={style.main}>
            <h1 className={style.mainHeading}>Sooooooooome heading</h1>
            <Posts />
        </main>
    );
}

export default Main;
