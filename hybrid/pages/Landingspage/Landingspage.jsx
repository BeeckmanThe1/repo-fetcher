import React from 'react';
import WEBSITE_SETUP from '../../../server/WEBSITE_SETUP';

const LandingsPage = () => {
    return <>
        <h1>Developer Index</h1>
        <h2>Static pages</h2>
        <ul>
            {WEBSITE_SETUP.ALL_STATIC_PAGES.map(PAGE => PAGE?.SLUG !== '/index' && <li key={PAGE.TITLE}><a href={PAGE?.SLUG}>{PAGE?.TITLE}</a></li>)}
        </ul>
    </>;
};

export default LandingsPage;
