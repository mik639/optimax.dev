import React, {Component, ReactNode} from 'react';

import Title from 'components/title/title';

import s from './jobByLocation.module.scss';

class JobByLocation extends Component {
    render(): ReactNode {
        return (
            <div className={s.wrap}>
                <div className={s.container}>
                    <div className={s.wrapTitle}><Title isWhite>Job by Location</Title></div>
                    <div className={s.box}>
                        <div className={s.item}>
                            <div className={s.wrapAddress}>
                                <p className={s.title}>Russia</p>
                                <p className={s.address}>Tolyatti, St. 8b, Frunze</p>
                            </div>
                            <div className={s.wrapAddress}>
                                <p className={s.title}>Israel</p>
                                <p className={s.address}>Habarzei, St. 34, Tel Aviv</p>
                            </div>
                        </div>
                        <div className={s.item}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobByLocation;
