import React, {ReactNode} from 'react';

import BaseIcon from 'components/baseIcon/baseIcon';

import s from './member.module.scss';

const Member = ({
    photo,
    name,
    position,
    description,
}: {
    photo: string;
    name: string;
    position: string;
    description: string;
}): ReactNode => (
    <div className={s.member}>
        <div className={s.image}>
            <img src={photo} />
        </div>
        <p className={s.name}>{name}</p>
        <p className={s.position}>{position}</p>
        <p className={s.description}>{description}</p>
    </div>
);

export default Member;
