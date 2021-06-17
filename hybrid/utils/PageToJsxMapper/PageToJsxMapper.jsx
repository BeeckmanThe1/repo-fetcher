import React from 'react';
import Pages from '../../pages/index';
import WEBSITE_SETUP from '../../../server/WEBSITE_SETUP';
import {renderToString} from 'react-dom/server';
import {Provider as ReduxProvider} from 'react-redux';

const {PAGES} = WEBSITE_SETUP;

export default (PAGE, returnAsHtml, options) => {

    let jsx;
    const store = options?.store;

    switch (PAGE.ID) {
        case PAGES.DEVELOPMENT_INDEX_PAGE.ID:
            jsx = <Pages.DevLandingPage/>;
            break;
        case PAGES.STATIC_PAGES.REPO_LANDINGS_PAGE.ID:
            jsx = <Pages.RepoLandingPage/>;
            break;
        case PAGES.REPO_DETAIL_PAGE.ID:
            jsx = <Pages.RepoDetailPage {...{repo: options?.repo}}/>;
            break;
        default:
            jsx = null;
            break;
    }
    jsx = <ReduxProvider store={store}>{jsx}</ReduxProvider>;
    return returnAsHtml ? renderToString(jsx) : jsx;
};
