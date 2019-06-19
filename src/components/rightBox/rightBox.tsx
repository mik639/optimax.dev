import React, { Component } from 'react';

import BaseIcon from 'components/baseIcon/baseIcon';

import s from './rightBox.module.scss';

class RightBox extends Component {
  render() {
    return (
        <div className={s.rightBox}>
            <div className={s.wrapLanguage}><BaseIcon name="language" /></div>
            <a className={s.apply} href="mailto:example.com">Apply</a>
        </div>
    );
  }
}

export default RightBox;
