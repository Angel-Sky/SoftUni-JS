import style from './Header.module.css';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className={style.listItem}><img src="/white-origami-bird.png" alt="logo" className={style.listItemImg}/></li>
                <li className={style.listItem}><a href="/#" className={style.listItemLink}>Going to 2</a></li>
                <li className={style.listItem}><a href="/#" className={style.listItemLink}>Going to 1</a></li>
                <li className={style.listItem}><a href="/#" className={style.listItemLink}>Going to 3</a></li>
                <li className={style.listItem}><a href="/#" className={style.listItemLink}>Going to 4</a></li>
                <li className={style.listItem}><a href="/#" className={style.listItemLink}>Going to 5</a></li>
                <li className={style.listItem}><a href="/#" className={style.listItemLink}>Going to 6</a></li>
                <li className={style.listItem}><a href="/#" className={style.listItemLink}>Going to 7</a></li>
                <li className={style.listItem}><a href="/#" className={style.listItemLink}>Going to 8</a></li>
                <li className={style.listItem}><a href="/#" className={style.listItemLink}>Going to 9</a></li>
                <li className={style.listItem}><a href="/#" className={style.listItemLink}>Going to 10</a></li>
            </ul>
        </nav>
    );
}

export default Header;