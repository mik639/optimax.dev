import React from 'react';
import {graphql} from 'gatsby';
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
import {className} from 'classnames';

const JobShare = ({children}) => {
    const shareUrl = window.location.href;
    return (
        <div className={s.container}>
            <p className={s.title}>Share This Job Opening</p>
            <div className={s.socials}>
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <VKShareButton url={shareUrl}>
                    <VKIcon size={32} round={true} />
                </VKShareButton>
            </div>
        </div>
    );
};

export default JobShare;
