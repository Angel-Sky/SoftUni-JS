import style from './Posts.module.css';

function Post() {
    return (
        <>
            <img src="/blue-origami-bird.png" alt="Origami" />
            <p className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className={style.postDiv}>
                <span className={style.postSpan}>
                    <small>Author: </small>
                    Some Anonimous
                </span>
            </div>
        </>
    );
}

export default Post;
