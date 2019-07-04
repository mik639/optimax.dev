import React, {ReactNode} from 'react';

import s from './jobContent.module.scss';

interface JobContentProps {
    children: ReactNode;
}

const JobContent = ({children}: JobContentProps): ReactNode => {
    return <div className={s.content} dangerouslySetInnerHTML={{__html: children}} />;
};

export default JobContent;
