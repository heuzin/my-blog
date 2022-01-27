import Head from 'next/head';
import { getSession } from 'next-auth/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Fragment, useEffect, useState } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { Posts } from '../../modals/Posts';
import PostContent from '../../components/postContent/PostContent';
import { getPostData, getPostsFiles } from '../../helpers/postsUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import StarIcon from '../../components/starIcon/StarIcon';

const startLookup: IconLookup = { prefix: 'fas', iconName: 'star' };
const startDefinition: IconDefinition = findIconDefinition(startLookup);

type Props = {
    post: Posts;
};

const SingleDetailPage: React.FC<Props> = ({ post }) => {
    const [id, setId] = useState();
    const [favorites, setFavorites] = useState<string[]>([]);

    const addToFavoritsHandler = async () => {
        setFavorites(favorites.concat(post.title));

        await fetch('/api/favorites', {
            method: 'PATCH',
            body: JSON.stringify({ id, favorites: post.title }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };

    const removeFavoritesHandler = async () => {
        setFavorites(favorites.filter((item) => item !== post.title));

        await fetch('/api/favorites/remove-favorite', {
            method: 'POST',
            body: JSON.stringify({ id, favorites: post.title }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };

    useEffect(() => {
        const getUser = async () => {
            const session = await getSession();

            if (!session) return;

            const response = await fetch('/api/user/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            setFavorites(data.favorites);
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
            <PostContent
                id={id}
                favorites={favorites}
                post={post}
                addToFavoritsHandler={addToFavoritsHandler}
                removeFavoritesHandler={removeFavoritesHandler}
            />
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
