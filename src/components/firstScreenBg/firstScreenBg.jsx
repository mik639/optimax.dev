import React, { Component } from 'react';


import s from './firstScreenBg.module.scss';


class FirstScreenBg extends Component {
  render() {
    return (
      <div className={s.wrap}>
        <div className={s.astronaut} />
      </div>
    );
  }
}

export default FirstScreenBg;
