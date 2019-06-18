import React, { Component } from 'react';

import Title from 'components/title/title';

import s from './firstScreenContent.module.scss';


class FirstScreenContent extends Component {
  render() {
    return (
      <div className={s.wrap}>
          <div className={s.content}>
            <Title>Work With Us</Title>
            <span className={s.desc}>
                We are a worldwide e-commerce
                <br/>
                leader in the eyewear industry.
            </span>
            <a className={s.applyNow} href="mailto:example.com">Apply now</a>
          </div>
      </div>
    );
  }
}

export default FirstScreenContent;
