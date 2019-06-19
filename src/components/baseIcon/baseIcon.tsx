import React, {ReactNode} from 'react';

import optimax from './svg/optimax.svg';
import language from './svg/language.svg';
import comfortable from './svg/comfortable.svg';
import grow from './svg/grow.svg';
import people from './svg/people.svg';
import social from './svg/social.svg';
import sport from './svg/sport.svg';
import food from './svg/food.svg';

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

interface IconProps {
    name: string;
    width: string;
    height: string;
}

const BaseIcon = ({name, width, height}: IconProps): ReactNode => {
    const icon = ICONS[name];
    return (
        <svg
            width={width || '100%'}
            height={height || '100%'}
            viewBox={icon.viewBox}
            className={s.container}
        >
            <use xlinkHref={`#${icon.id}`} />
        </svg>
    );
};

export default BaseIcon;
