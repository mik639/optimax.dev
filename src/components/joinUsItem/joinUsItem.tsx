import React from 'react';
import {Link} from 'gatsby';

import BaseIcon from 'components/baseIcon/baseIcon';

import {MarkdownRemarkFrontmatter} from 'types';

import s from './joinUsItem.module.scss';

const JoinUsItem: React.SFC<MarkdownRemarkFrontmatter> = ({
    item,
}: MarkdownRemarkFrontmatter): React.ReactElement => (
    <Link to={item.path} className={s.wrap}>
        <div className={s.content}>
            <span className={s.title}>{item.title}</span>
            <span className={s.address}>{item.address}</span>
            <span className={s.text}>{item.text}</span>
        </div>
        <div className={s.wrapArrow}>
            <BaseIcon name="arrow" />
        </div>
    </Link>
);

export default JoinUsItem;
