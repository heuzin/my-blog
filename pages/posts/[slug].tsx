import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { User } from 'next-auth';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { Fragment, useEffect, useState } from 'react';
import PostContent from '../../components/postContent/PostContent';
import { connectToDatabase } from '../../helpers/db';
import { getPostData, getPostsFiles } from '../../helpers/postsUtils';
import { Posts } from '../../modals/Posts';

type Props = {
    post: Posts;
};

const SingleDetailPage: React.FC<Props> = ({ post }) => {
    const [id, setId] = useState();
    const addToFavoritsHandler = async () => {
        await fetch('/api/favorites', {
            method: 'PATCH',
            body: JSON.stringify({ id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };
    useEffect(() => {
        const getUser = async () => {
            const response = await fetch('/api/user/profile', {
                method: 'GET',
                // body: JSON.stringify({ email: session?.user?.email }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log(data.favorites);
            setId(data.id);
        };
        getUser();
    }, []);

    return (
        <Fragment>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />;
            </Head>
            <button onClick={addToFavoritsHandler}>Add To Favorites</button>
            <PostContent post={post} />;
        </Fragment>
    );
};

interface IParams extends ParsedUrlQuery {
    slug: string;
}

export const getStaticProps: GetStaticProps = (context) => {
    const { params } = context;
    const { slug } = params as IParams;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    };
};

export const getStaticPaths: GetStaticPaths = () => {
    const postFileNames = getPostsFiles();

    const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map((slug: string) => ({ params: { slug } })),
        fallback: false,
    };
};

export default SingleDetailPage;
