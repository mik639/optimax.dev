import React, {ReactNode} from 'react';

import Title from 'components/title/title';
import Subtitle from 'components/subtitle/subtitle';
import Member from 'components/home/team/member/member';

import s from './index.module.scss';

interface TeamType {
    name: string;
    title: string;
    description: string;
}

const TEAMS: TeamType[] = [
    {
        photo: require('./img/nehozin.png'),
        name: 'Ilya Nekhozhin',
        position: 'SRE Teamlead',
        description: 'Max workplace comfort, high-end monitors for convenience',
    },
    {
        photo: require('./img/belonovich.jpg'),
        name: 'Anton Belonovich',
        position: 'GlassesUSA Teamlead',
        description: 'Plenty of corporate & team building events',
    },
    {
        photo: require('./img/gusarov.jpg'),
        name: 'Eugeny Gusarov',
        position: 'Release manager',
        description: 'Freshly brewed coffee, tea, juice, drinks, breakfast, lunch',
    },
    {
        photo: require('./img/nikolaevskiy.jpg'),
        name: 'Mikhail Nikolaevskiy',
        position: 'D.E.H.T.A. teamlead',
        description: 'English training, frequent practical use',
    },
    {
        photo: require('./img/kruhmaleva.jpg'),
        name: 'Ekaterina Krukhmaleva',
        position: 'HR',
        description: 'Outdoors & indoors company sports days & activities',
    },
    {
        photo: require('./img/sustretov.jpg'),
        name: 'Alexander Sustretov',
        position: 'Growth teamlead',
        description: 'Fun, dynamic work enviornment with people like you :)',
    },
    {
        photo: require('./img/kolesnik.jpg'),
        name: 'Kirill Kolesnik',
        position: 'QA manager/PO',
        description: 'Fun, dynamic work enviornment with people like you :)',
    },
    {
        photo: require('./img/melnikov.jpg'),
        name: 'Ivan Melnikov',
        position: 'UVP teamlead',
        description: 'Fun, dynamic work enviornment with people like you :)',
    },
    {
        photo: require('./img/smirnov.jpg'),
        name: 'Vladislav Smirnov',
        position: 'Rebels teamlead',
        description: 'Fun, dynamic work enviornment with people like you :)',
    },
    {
        photo: require('./img/meling.jpg'),
        name: 'Vadim Meling',
        position: 'Backend techlead',
        description: 'Fun, dynamic work enviornment with people like you :)',
    },
    {
        photo: require('./img/kirsanov.png'),
        name: 'Eugene Kirsanov',
        position: 'Analytics teamlead',
        description: 'Fun, dynamic work enviornment with people like you :)',
    },
    {
        photo: require('./img/shilnikov.jpg'),
        name: 'Denis Shilnikov',
        position: 'Backend teamlead',
        description: 'Fun, dynamic work enviornment with people like you :)',
    },
    {
        photo: require('./img/ulianov.jpg'),
        name: 'Aleksei Ulianov',
        position: 'Frontend techlead',
        description: 'Fun, dynamic work enviornment with people like you :)',
    },
    {
        photo: require('./img/kornushkov.png'),
        name: 'Nickolay Kornushkov',
        position: 'Head of Russian department',
        description: 'Fun, dynamic work enviornment with people like you :)',
    },
];

const Team = (): ReactNode => (
    <div className={s.wrap}>
        <div className={s.container}>
            <div className={s.titles}>
                <Title isWhite>Jobs by team</Title>
                <Subtitle isWhite>The people behind our company</Subtitle>
            </div>
            <div className={s.teams}>
                {TEAMS.map(
                    (team: TeamType): ReactNode => (
                        <Member key={team.name} {...team} />
                    ),
                )}
            </div>
        </div>
    </div>
);

export default Team;
