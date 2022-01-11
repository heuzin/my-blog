import { Posts } from '../../models/Posts';
import PostItem from '../postItem/PostItem';
import classes from './PostsGrid.module.css';

type Props = {
    posts: Posts[];
};

const PostsGrid: React.FC<Props> = (props) => {
    const { posts } = props;
    return (
        <ul className={classes.grid}>
            {posts.map((post) => (
                <PostItem key={post.slug} posts={post} />
            ))}
        </ul>
    );
};

export default PostsGrid;
