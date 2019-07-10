import React, {ReactNode} from 'react';

import glassesusa from './img/glassesusaD.jpg';
import ottica from './img/otticaD.jpg';
import uvp from './img/uvpD.jpg';
import job from './img/job.jpg';

import s from './background.module.scss';

interface BackgroundProps {
    name: string;
    children: ReactNode;
}

const IMAGES_MAP = {
    glassesusa,
    ottica,
    uvp,
    job,
};

const Background = ({name, children}: BackgroundProps): ReactNode => (
    <div className={s.wrap}>
        <div className={s.inner}>
            {children && <div className={s.content}>{children}</div>}
            <div className={s.wrapImg}>
                <img className={s.img} src={IMAGES_MAP[name]} alt="" />
            </div>
        </div>
    </div>
);

export default Background;
