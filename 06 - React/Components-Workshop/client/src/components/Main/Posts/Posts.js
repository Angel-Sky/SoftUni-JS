import style from './Posts.module.css';

function Posts({ posts }) {
    
    return (
        <div className={style.posts}>
            {posts.map(x => 
                <div key={x.id}>
                    <img src="/blue-origami-bird.png" alt="Origami" />
                    <p className={style.description}>{x.description}</p>
                    <div className={style.postDiv}>
                        <span className={style.postSpan}>
                            <small>Author: </small>
                            {x.author}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Posts;
