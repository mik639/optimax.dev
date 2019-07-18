import React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  VKShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  VKIcon
} from 'react-share'

import s from './jobShare.module.scss'

const JobShare: React.FC = (): React.ReactElement => {
  return (
    <div className={s.container}>
      <p className={s.title}>Share This Job Opening</p>
      <div className={s.socials}>
        <div className={s.item}>
          <FacebookShareButton url="/">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className={s.item}>
          <LinkedinShareButton url="/">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
        <div className={s.item}>
          <TwitterShareButton url="/">
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
        <div className={s.item}>
          <VKShareButton url="/">
            <VKIcon size={32} round />
          </VKShareButton>
        </div>
      </div>
    </div>
  )
}

export default JobShare
