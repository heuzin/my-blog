import { Posts } from '../../models/Posts';
import PostsGrid from '../postsGrid/PostsGrid';
import classes from './FeaturedPosts.module.css';

type Props = {
    posts: Posts[];
};

const FeaturedPosts: React.FC<Props> = (props) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts} />
        </section>
    );
};

export default FeaturedPosts;
