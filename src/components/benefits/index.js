import React from 'react';

import Title from 'components/title/title';
import Subtitle from 'components/subtitle/subtitle';

import s from './index.module.scss';

const Benefits = props => (
    <div className={s.wrap}>
      <div className={s.titles}>
        <Title>Benefits & Perks</Title>
        <Subtitle>Discover more reasons to join our team:</Subtitle>
      </div>
    </div>
);

export default Benefits;
