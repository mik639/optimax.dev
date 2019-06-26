import React, {ReactNode} from 'react';

import {MAIL_TO} from 'constants/mailTo';

import s from './jobApply.module.scss';

const JobApply = (): ReactNode => {
    return (
        <a className={s.apply} href={MAIL_TO}>
            Apply For This Job
        </a>
    );
};

export default JobApply;
