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
                <FacebookShareButton className={s.item} url={path}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <LinkedinShareButton className={s.item} url={path}>
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton className={s.item} url={path}>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <VKShareButton className={s.item} url={path}>
                    <VKIcon size={32} round={true} />
                </VKShareButton>
            </div>
        </div>
    );
};

export default JobShare;
