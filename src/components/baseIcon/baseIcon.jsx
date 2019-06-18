import React from 'react';

import optimax from './svg/optimax.svg';
import language from './svg/language.svg';

import {
  SIZE_LARGE, SIZE_MEDIUM, SIZE_RESPONSIVE, SIZE_SMALL,
} from './constants';

import s from './baseIcon.scss';

const ICONS = {
  optimax,
  language,
};

const SIZES = {
  [SIZE_SMALL]: 16,
  [SIZE_MEDIUM]: 22,
  [SIZE_LARGE]: 34,
  [SIZE_RESPONSIVE]: '100%',
};


const BaseIcon = ({ name }) => {
  const icon = ICONS[name];

  return (
        <svg width="100%" height="100%" viewBox={icon.viewBox} className={s.container}>
            <use xlinkHref={`#${icon.id}`} />
        </svg>
  );
};

export default BaseIcon;
