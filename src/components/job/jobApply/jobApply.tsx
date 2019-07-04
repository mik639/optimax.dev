import React, {ReactNode} from 'react';

import s from './jobApply.module.scss';

const JobApply = (): ReactNode => {
    return (
        <a className={s.apply} href={'MAIL_TO'}>
            Apply For This Job
        </a>
    );
};

export default JobApply;
