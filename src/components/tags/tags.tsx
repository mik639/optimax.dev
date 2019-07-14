import React, {ReactNode} from 'react';
import classNames from 'classnames';

import s from './tags.module.scss';

interface TagsProps {
    tags: string;
    size: 'big' | 'small';
}

const Tags = ({tags, size}: TagsProps): ReactNode => {
    return tags.split(',').map(tag => (
        <span className={classNames(s.tag, s[size])} key={tag}>
            #{tag}
        </span>
    ));
};

Tags.defaultProps = {
    size: 'small',
};

export default Tags;
