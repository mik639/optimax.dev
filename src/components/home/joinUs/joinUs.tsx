import React, {Component, ReactNode} from 'react';

import Title from 'components/title/title';
import Subtitle from 'components/subtitle/subtitle';
import JoinUsItem from 'components/home/joinUsItem/joinUsItem';

import s from './joinUs.module.scss';

interface ItemType {
    title: string;
    address: string;
    text: string;
}

const JOINUS_ITEMS = [
    {
        title: 'Software Engineer1',
        address: 'Tolyatti, St. 8b',
        text: 'Lorem ipsum dolor sit amet, rutrum lectus donec augue, molestie egestas at sit.',
    },
    {
        title: 'Software Engineer2',
        address: 'Tolyatti, St. 8b',
        text: 'Lorem ipsum dolor sit amet, rutrum lectus donec augue, molestie egestas at sit.',
    },
    {
        title: 'Software Engineer3',
        address: 'Tolyatti, St. 8b',
        text: 'Lorem ipsum dolor sit amet, rutrum lectus donec augue, molestie egestas at sit.',
    },
    {
        title: 'Software Engineer4',
        address: 'Tolyatti, St. 8b',
        text: 'Lorem ipsum dolor sit amet, rutrum lectus donec augue, molestie egestas at sit.',
    },
    {
        title: 'Software Engineer5',
        address: 'Tolyatti, St. 8b',
        text: 'Lorem ipsum dolor sit amet, rutrum lectus donec augue, molestie egestas at sit.',
    },
    {
        title: 'Software Engineer6',
        address: 'Tolyatti, St. 8b',
        text: 'Lorem ipsum dolor sit amet, rutrum lectus donec augue, molestie egestas at sit.',
    },
];

class JoinUs extends Component {
    render(): ReactNode {
        return (
            <div className={s.wrap}>
                <div className={s.wrapTitles}>
                    <Title>Join Us</Title>
                    <Subtitle>Current openings</Subtitle>
                </div>
                <div className={s.wrapItems}>
                    {JOINUS_ITEMS.map(
                        (item: ItemType): ReactNode => (
                            <JoinUsItem key={item.title} item={item} />
                        ),
                    )}
                </div>
            </div>
        );
    }
}

export default JoinUs;
