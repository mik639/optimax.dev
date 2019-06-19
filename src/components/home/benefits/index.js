import React from 'react';

import Title from 'components/title/title';
import Subtitle from 'components/subtitle/subtitle';
import Perk from 'components/home/benefits/perk/perk';

import s from './index.module.scss';

const PERKS = [
  { name: 'comfortable', title: 'Get Comfortable', description: 'Max workplace comfort, high-end monitors for convenience' },
  { name: 'social', title: 'Social Activities', description: 'Plenty of corporate & team building events' },
  { name: 'food', title: 'Food & Drinks', description: 'Freshly brewed coffee, tea, juice, drinks, breakfast, lunch' },
  { name: 'grow', title: 'Learning & Grow', description: 'English training, frequent practical use' },
  { name: 'sport', title: 'Sports Activities', description: 'Outdoors & indoors company sports days & activities' },
  { name: 'people', title: 'Awesome people', description: 'Fun, dynamic work enviornment with people like you :)' },
];

const Benefits = props => (
    <div className={s.wrap}>
      <div className={s.titles}>
        <Title>Benefits & Perks</Title>
        <Subtitle>Discover more reasons to join our team:</Subtitle>
      </div>
      <div className={s.perks}>
        {PERKS.map(perk => <Perk {...perk}/>)}
      </div>
    </div>
);

export default Benefits;
