import React, {ReactNode} from 'react';

import JoinUs from 'components/joinUs/joinUs';

import s from './jobsContent.module.scss';

/**
 * Component content for Jobs page
 * @returns {RactNode} return component content
 */
const JobsContent = (): ReactNode => (
    <div className={s.wrap}>
        <JoinUs />
    </div>
);

export default JobsContent;
