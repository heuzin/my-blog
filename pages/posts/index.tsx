import { GetStaticProps } from 'next';
import { getAllPosts, getFilteredPosts } from '../../helpers/postsUtils';
import { Posts } from '../../modals/Posts';
import AllPosts from '../../components/allPosts/AllPosts';
import { Fragment } from 'react';
import Head from 'next/head';

type Props = {
    posts: Posts[];
};

const AllPostsPage: React.FC<Props> = ({ posts }) => {
    console.log(posts[0].title);

    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A list of all programming-tutorials and posts!" />
            </Head>
            <AllPosts posts={posts} />
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = () => {
    const allPosts = getAllPosts();
    const post = getFilteredPosts('What is JavaScript?');
    console.log(post);
    return {
        props: {
            posts: allPosts,
        },
    };
};

export default AllPostsPage;
