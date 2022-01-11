import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { Fragment } from 'react';
import PostContent from '../../components/postContent/PostContent';
import { getPostData, getPostsFiles } from '../../helpers/postsUtils';
import { Posts } from '../../models/Posts';

type Props = {
    post: Posts;
};

const SingleDetailPage: React.FC<Props> = ({ post }) => {
    return (
        <Fragment>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />;
            </Head>
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
