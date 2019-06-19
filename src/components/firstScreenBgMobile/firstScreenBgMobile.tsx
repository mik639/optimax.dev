import React, { Component } from 'react';


import s from './firstScreenBgMobile.module.scss';


class FirstScreenBgMobile extends Component {
  render() {
    return (
      <div className={s.wrap}>
        <div className={s.astronaut} />
      </div>
    );
  }
}

export default FirstScreenBgMobile;
