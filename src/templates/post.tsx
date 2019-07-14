import React, {ReactNode} from 'react';
import {graphql} from 'gatsby';

import SEO from 'components/SEO/SEO';
import Layout from 'layouts/index';
import WrapHeader from 'components/wrapHeader/wrapHeader';
import Background from 'components/background/background';
import BlogItem from 'components/blog/blogItem/blogItem';
import Title from 'components/title/title';
import Tags from 'components/tags/tags';
import Author from 'components/blog/author/author';
import useBlogPosts from 'hooks/useBlog';

import {MarkdownRemark} from 'src/types.ts';

import s from './post.module.scss';

const Post = ({data}: MarkdownRemark): ReactNode => {
    const {
        html,
        id,
        frontmatter: {title, image, tags, avatar, author},
    } = data.markdownRemark;
    const posts = useBlogPosts();
    const filteredPosts = posts.filter(item => item.node.id !== id).slice(0, 3);

    return (
        <Layout>
            <SEO title={title} />
            <WrapHeader />
            <Background name="job" img={image}>
                <Title isWhite>
                    <div className={s.wrapTitle}>{title}</div>
                    <div className={s.wrapTags}>
                        <Tags tags={tags} size="big" />
                    </div>
                </Title>
                <Author avatar={avatar} author={author} />
            </Background>
            <div className={s.body}>
                <div className={s.content} dangerouslySetInnerHTML={{__html: html}} />
                <div className={s.sideBar}>
                    {filteredPosts.map(post => (
                        <BlogItem key={post.node.frontmatter.path} item={post.node.frontmatter} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($id: String!) {
        markdownRemark(id: {eq: $id}) {
            id
            frontmatter {
                title
                path
                image
                author
                avatar
                shortDescription
                tags
            }
            html
        }
    }
`;

export default Post;
