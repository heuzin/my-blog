import { Posts } from '../../models/Posts';
import PostsGrid from '../postsGrid/PostsGrid';
import classes from './AllPosts.module.css';

type Props = {
    posts: Posts[];
};

const AllPosts: React.FC<Props> = (props) => {
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={props.posts} />
        </section>
    );
};

export default AllPosts;
