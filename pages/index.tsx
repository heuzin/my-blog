import { GetStaticProps } from 'next';
import { Fragment } from 'react';

import Hero from '../components/hero/Hero';
import FeaturedPosts from '../components/featuredPosts/FeaturedPosts';
import { getFeaturedPosts } from '../helpers/postsUtils';
import { Posts } from '../models/Posts';
import Head from 'next/head';

type Props = {
    posts: Posts[];
};

const HomePage: React.FC<Props> = ({ posts }) => {
    return (
        <Fragment>
            <Head>
                <title>Matheus Blog</title>
                <meta name="description" content="I post about programming and web development" />
            </Head>
            <Hero />
            <FeaturedPosts posts={posts} />
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = () => {
    const featuredPosts: Posts[] = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
    };
};

export default HomePage;
