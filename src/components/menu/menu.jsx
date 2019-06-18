import React, { Component } from 'react';

import s from './menu.module.scss';


class Menu extends Component {
  render() {
    return (
      <nav className={s.list}>
          <a className={s.link} href="#">About Us</a>
          <a className={s.link} href="#">Location</a>
          <a className={s.link} href="#">Careers</a>
          <a className={s.link} href="#">Our team</a>
          <a className={s.link} href="#">Blog</a>
      </nav>
    );
  }
}

export default Menu;
