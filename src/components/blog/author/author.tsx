import React, {ReactNode} from 'react';

import s from './author.module.scss';

interface AuthorType {
    avatar: string;
    author: string;
}

const Author: React.SFC<AuthorType> = ({avatar, author}: AuthorType): React.ReactElement => (
    <div className={s.wrapAuthor}>
        <img className={s.avatar} src={avatar} alt={author} />
        <span className={s.author}>{author}</span>
        <i className={s.separator} />
        <span className={s.date}>Feb 18, 2019</span>
    </div>
);

export default Author;
