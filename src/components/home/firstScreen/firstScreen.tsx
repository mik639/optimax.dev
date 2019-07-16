import React from 'react';

import Title from 'components/title/title';
import Button from 'components/button/button';
import useSiteMetadata from 'hooks/useSiteMetaData';

import s from './firstScreen.module.scss';

const FirstScreen: React.SFC = (): React.ReactElement => {
    const {contact} = useSiteMetadata();
    return (
        <div className={s.container}>
            <div className={s.wrap}>
                <div className={s.content}>
                    <Title>Work With Us</Title>
                    <span className={s.desc}>
                        We are a worldwide e-commerce
                        <br />
                        leader in the eyewear industry.
                    </span>
                    <Button className={s.btn} href={`mailto:${contact.email}`}>
                        <span className={s.btnText}>Apply now</span>
                    </Button>
                </div>
                <div className={s.bg} />
            </div>
        </div>
    );
};

export default FirstScreen;
