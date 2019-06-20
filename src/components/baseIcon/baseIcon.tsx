import React, {ReactNode} from 'react';

import optimax from './svg/optimax.svg';
import language from './svg/language.svg';
import glassesusa from './svg/glassesusa.svg';
import ottica from './svg/ottica.svg';
import uvp from './svg/uvp.svg';
import comfortable from './svg/comfortable.svg';
import grow from './svg/grow.svg';
import people from './svg/people.svg';
import social from './svg/social.svg';
import sport from './svg/sport.svg';
import food from './svg/food.svg';
import facebook from './svg/facebook.svg';
import linkdin from './svg/linkdin.svg';
import twitter from './svg/twitter.svg';
import instagram from './svg/instagram.svg';
import youtube from './svg/youtube.svg';

import s from './baseIcon.scss';

const ICONS = {
    optimax,
    language,
    glassesusa,
    ottica,
    uvp,
    comfortable,
    grow,
    people,
    social,
    sport,
    food,
    facebook,
    linkdin,
    twitter,
    instagram,
    youtube,
};

interface IconProps {
    name: string;
    width: string;
    height: string;
}

const BaseIcon = ({name, width, height}: IconProps): ReactNode => {
    const icon = ICONS[name];

    if (typeof icon === 'undefined') {
        console.error('Requested icon does not exist');
        return null;
    }

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
