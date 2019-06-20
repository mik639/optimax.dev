import React from 'react';
import {graphql} from 'gatsby';
import MediaQuery from 'react-responsive';

import s from './jobContent.module.scss';
// import SEO from 'components/SEO/SEO';
// import Layout from 'layouts/index';
// import Header from 'components/header/header';
// import Footer from 'components/footer/footer';
// import JobContent from 'components/jobs/jobContent/jobContent';

const JobContent = ({children}) => {
    // const {title} = data.markdownRemark.frontmatter;
    // const {html} = data.markdownRemark;
    return (
        <div className={s.container}>
            <div className={s.content} dangerouslySetInnerHTML={{__html: children}} />
        </div>
    );
};

export default JobContent;
