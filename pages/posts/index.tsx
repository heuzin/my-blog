import { GetStaticProps } from 'next';
import { getAllPosts } from '../../helpers/postsUtils';
import { Posts } from '../../models/Posts';
import AllPosts from '../../components/allPosts/AllPosts';
import { Fragment } from 'react';
import Head from 'next/head';

type Props = {
    posts: Posts[];
};

const AllPostsPage: React.FC<Props> = ({ posts }) => {
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

    return {
        props: {
            posts: allPosts,
        },
    };
};

export default AllPostsPage;
