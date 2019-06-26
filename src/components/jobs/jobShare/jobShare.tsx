import React, {ReactNode} from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    VKShareButton,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    VKIcon,
} from 'react-share';

import s from './jobShare.module.scss';

const JobShare = ({path}: string): ReactNode => {
    return (
        <div className={s.container}>
            <p className={s.title}>Share This Job Opening</p>
            <div className={s.socials}>
                <FacebookShareButton url={path}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <LinkedinShareButton url={path}>
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton url={path}>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <VKShareButton url={path}>
                    <VKIcon size={32} round={true} />
                </VKShareButton>
            </div>
        </div>
    );
};

export default JobShare;
