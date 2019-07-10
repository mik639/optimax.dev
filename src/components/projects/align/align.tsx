import React, {ReactNode} from 'react';

import s from './align.module.scss';

interface AlignPropsType {
    children: ReactNode;
}

const Align = ({children}: AlignPropsType): ReactNode => {
    return <div className={s.wrap}>{children}</div>;
};

export default Align;
