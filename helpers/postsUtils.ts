import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Posts } from '../models/Posts';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsFiles = () => fs.readdirSync(postsDirectory);

export const getPostData = (postIdentifier: string) => {
    const postSlug = postIdentifier.replace(/\.md$/, ''); // Removes the file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const { title, image, excerpt, date, isFeatured } = data;

    const postData: Posts = {
        slug: postSlug,
        title,
        image,
        excerpt,
        date,
        content,
        isFeatured,
    };

    return postData;
};

export const getAllPosts = () => {
    const postsFiles = getPostsFiles();

    const allPosts = postsFiles.map((postFile) => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

    return sortedPosts;
};

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter((post) => post.isFeatured);

    return featuredPosts;
};
