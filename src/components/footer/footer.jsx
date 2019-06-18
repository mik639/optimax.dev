import React, { Component } from 'react';

import BaseIcon from '../baseIcon/baseIcon';

import s from './footer.module.scss';


class Footer extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.wrap}>
          <div className={s.wrapLogo}>
            <BaseIcon name="optimax" />
          </div>
          <div className={s.menu}>
            <a href="#">About Us</a>
            <a href="#">Location</a>
            <a href="#">Careers</a>
            <a href="#">Our Team</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
