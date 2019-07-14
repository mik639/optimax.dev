import React, {ReactNode} from 'react';
import {graphql} from 'gatsby';

import BlogItem from 'components/blog/blogItem/blogItem';
import useBlogPosts from 'hooks/useBlog';

import s from './blogWrapper.module.scss';

const BlogWrapper = (): ReactNode => {
    const posts = useBlogPosts();

    return (
        <div className={s.wrap}>
            {posts.map(post => (
                <BlogItem key={post.node.frontmatter.path} item={post.node.frontmatter} />
            ))}
        </div>
    );
};

export default BlogWrapper;
