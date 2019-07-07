import React, {ReactNode} from 'react';

import Button from 'components/button/button';
import useSiteMetadata from 'hooks/useSiteMetaData';

import s from './jobApply.module.scss';

const JobApply = (): ReactNode => {
    const {contact} = useSiteMetadata();
    return (
        <Button className={s.btn} href={`mailto:${contact.email}`}>
            <span className={s.btnText}>Apply For This Job</span>
        </Button>
    );
};

export default JobApply;
