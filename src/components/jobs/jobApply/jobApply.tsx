import React from 'react';

import s from './jobApply.module.scss';

const JobApply = ({children}) => {
    return (
        <a className={s.apply} href="mailto:example.com">
            Apply For This Job
        </a>
    );
};

export default JobApply;
