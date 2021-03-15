import style from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={style.aside}>
            <ul>
                <li className={style.listItem}><a href="/" className={style.listItemLink}>Goint to 1</a></li>
                <li className={style.listItem}><a href="/" className={style.listItemLink}>Goint to 2</a></li>
                <li className={style.listItem}><a href="/" className={style.listItemLink}>Goint to 3</a></li>
                <li className={style.listItem}><a href="/" className={style.listItemLink}>Goint to 4</a></li>
                <li className={style.listItem}><a href="/" className={style.listItemLink}>Goint to 5</a></li>
                <li className={style.listItem}><a href="/" className={style.listItemLink}>Goint to 6</a></li>
                <li className={style.listItem}><a href="/" className={style.listItemLink}>Goint to 7</a></li>
                <li className={style.listItem}><a href="/" className={style.listItemLink}>Goint to 8</a></li>
                <li className={style.listItem}><a href="/" className={style.listItemLink}>Goint to 9</a></li>
                <li className={style.listItem}><a href="/" className={style.listItemLink}>Goint to 10</a></li>
                <li className={style.listItem}><a href="/" className={style.listItemLink}>Goint to 11</a></li>
            </ul>
        </aside>
    );
}

export default Aside;