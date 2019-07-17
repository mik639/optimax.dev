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

interface JobSharePropsType {
  path: string
}

const JobShare: React.SFC<JobSharePropsType> = ({ path }: JobSharePropsType): React.ReactElement => {
  return (
    <div className={s.container}>
      <p className={s.title}>Share This Job Opening</p>
      <div className={s.socials}>
        <FacebookShareButton className={s.item} url={path}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <LinkedinShareButton className={s.item} url={path}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <TwitterShareButton className={s.item} url={path}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <VKShareButton className={s.item} url={path}>
          <VKIcon size={32} round />
        </VKShareButton>
      </div>
    </div>
  )
}

export default JobShare
