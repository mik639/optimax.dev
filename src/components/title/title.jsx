import React, { Component } from 'react';


import s from './title.module.scss';


class Title extends Component {
  render() {
    return <h2 className={s.title}>{this.props.children}</h2>;
  }
}

export default Title;
