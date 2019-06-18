import React, { Component } from 'react';

import BaseIcon from '../baseIcon/baseIcon';
import Menu from '../menu/menu';

import s from './leftBox.module.scss';


class LeftBox extends Component {
  render() {
    return (
        <div className={s.leftBox}>
            <div className={s.wrapLogo}>
                <BaseIcon name="optimax" />
            </div>
            <Menu/>
        </div>
    );
  }
}

export default LeftBox;
