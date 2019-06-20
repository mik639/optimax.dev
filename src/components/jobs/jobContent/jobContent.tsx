import React from 'react';
import {graphql} from 'gatsby';

import s from './jobContent.module.scss';

const JobContent = ({children}) => {
    return <div className={s.content} dangerouslySetInnerHTML={{__html: children}} />;
};

export default JobContent;
