import React, {ReactNode} from 'react';

import Title from 'components/title/title';
import Subtitle from 'components/subtitle/subtitle';
import JoinUsItem from 'components/joinUsItem/joinUsItem';
import useJobs from 'hooks/useJobs';

import s from './joinUs.module.scss';

interface ItemType {
    title: string;
    address: string;
    text: string;
}

const JoinUs = (): ReactNode => {
    const jobs = useJobs();
    return (
        <div className={s.wrap}>
            <div className={s.wrapTitles}>
                <Title>Join Us</Title>
                <Subtitle>Current openings</Subtitle>
            </div>
            {jobs.map(
                (item: ItemType): ReactNode => (
                    <JoinUsItem key={item.node.frontmatter.path} item={item.node.frontmatter} />
                ),
            )}
        </div>
    );
};

export default JoinUs;
