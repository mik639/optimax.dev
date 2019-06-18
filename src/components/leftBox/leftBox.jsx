import React, { Component } from 'react';

import MediaQuery from 'react-responsive';

import BaseIcon from 'components/baseIcon/baseIcon';
import Menu from 'components/menu/menu';

import s from './leftBox.module.scss';


class LeftBox extends Component {
  render() {
    return (
        <div className={s.leftBox}>
            <div className={s.wrapLogo}>
                <BaseIcon name="optimax" />
            </div>
            <MediaQuery query="(min-device-width: 975px)">
              <Menu/>
            </MediaQuery>
        </div>
    );
  }
}

export default LeftBox;
