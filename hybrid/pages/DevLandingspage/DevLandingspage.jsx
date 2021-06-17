import React from 'react';
import WEBSITE_SETUP from '../../../server/WEBSITE_SETUP';
import {useSelector} from 'react-redux';

const DevLandingspage = () => {
    const repos = useSelector(state => state?.website.repositories?.items || []);
    return <>
        <h1>Developer Index</h1>
        <h2>Static pages</h2>
        <ul>
            {WEBSITE_SETUP.ALL_STATIC_PAGES.map(PAGE => PAGE?.SLUG !== '/index' &&
                <li key={PAGE.TITLE}><a href={PAGE?.SLUG}>{PAGE?.TITLE}</a></li>)}
        </ul>
        <h2>Dynamic pages</h2>
        <ul>
            {repos.map(repo => <li key={repo?.name}><a href={repo?.slug}>{repo.name}</a></li>)}
        </ul>
    </>;
};

export default DevLandingspage;
