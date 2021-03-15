import style from './Posts.module.css';
import Post from './Post'
function Posts({ posts }) {
    
    return (
        <div className={style.posts}>
            {posts.map(x => 
                <Post key = {x.id} description = {x.description} author = {x.author}/>
            )}
        </div>
    );
}

export default Posts;
