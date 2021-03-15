import style from './Posts.module.css';

function Post({key, description, author}) {
    return (
        <div key={key} className={style.post}>
            <img src="/blue-origami-bird.png" alt="Origami" />
            <p className={style.description}>{description}</p>
            <div className={style.postDiv}>
                <span className={style.postSpan}>
                    <small>Author: </small>
                    {author}
                </span>
            </div>
        </div>
    );
}

export default Post;
