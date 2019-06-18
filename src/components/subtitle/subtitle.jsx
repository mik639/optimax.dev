import React, { Component } from 'react';


import s from './subtitle.module.scss';


class Subtitle extends Component {
  render() {
    return <h3 className={s.subtitle}>{this.props.children}</h3>;
  }
}

export default Subtitle;
