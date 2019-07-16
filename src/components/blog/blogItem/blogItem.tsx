import React, {ReactNode} from 'react';
import {Link} from 'gatsby';

import Tags from 'components/tags/tags';
import {MarkdownRemarkFrontmatter} from 'types';

import s from './blogItem.module.scss';

interface BlogItemProps {
    item: MarkdownRemarkFrontmatter;
}

const BlogItem: React.SFC<BlogItemProps> = ({
    item: {path, title, image, author, tags, avatar, shortDescription},
}: BlogItemProps): React.ReactElement => {
    return (
        <Link to={path} className={s.wrap}>
            <div className={s.wrapImg}>
                <img className={s.img} src={image} alt={title} />
            </div>
            <span className={s.title}>{title}</span>
            <div className={s.wrapAuthor}>
                <img className={s.avatar} src={avatar} alt="" />
                <span className={s.author}>{author}</span>
            </div>
            <p className={s.text}>{shortDescription}</p>
            <Tags tags={tags} />
        </Link>
    );
};

export default BlogItem;
