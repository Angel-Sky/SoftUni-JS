import style from './Posts.module.css';
import Post from './Post'
function Posts() {
    return (
        <div className={style.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;
