import React, {ReactNode} from 'react';
import {Link} from 'gatsby';

import s from './buttnBack.module.scss';

interface ButtonBackType {
    url: string;
}

/**
 * Component button back
 * @param {ButtonBackType}
 * @returns {RactNode} return component
 */
const ButtonBack = ({url}: ButtonBackType): ReactNode => (
    <div className={s.wrap}>
        <Link className={s.link} to={url}>
            <span className={s.arrow} />
            <span>Back</span>
        </Link>
    </div>
);

export default ButtonBack;
