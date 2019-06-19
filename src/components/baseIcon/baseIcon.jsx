import React from 'react';

import optimax from './svg/optimax.svg';
import language from './svg/language.svg';
import comfortable from './svg/comfortable.svg';
import grow from './svg/grow.svg';
import people from './svg/people.svg';
import social from './svg/social.svg';
import sport from './svg/sport.svg';
import food from './svg/food.svg';

import {
  SIZE_LARGE, SIZE_MEDIUM, SIZE_RESPONSIVE, SIZE_SMALL,
} from './constants';

import s from './baseIcon.scss';

const ICONS = {
  optimax,
  language,
  comfortable,
  grow,
  people,
  social,
  sport,
  food,
};

const SIZES = {
  [SIZE_SMALL]: 16,
  [SIZE_MEDIUM]: 22,
  [SIZE_LARGE]: 34,
  [SIZE_RESPONSIVE]: '100%',
};


const BaseIcon = ({ name, width, height }) => {
  const icon = ICONS[name];
  console.log('width', width);
  return (
        <svg width={width || '100%'} height={height || '100%'} viewBox={icon.viewBox} className={s.container}>
            <use xlinkHref={`#${icon.id}`} />
        </svg>
  );
};

export default BaseIcon;
