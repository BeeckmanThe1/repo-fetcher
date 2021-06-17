import React from 'react';
import Pages from '../../pages/index';
import WEBSITE_SETUP from '../../../server/WEBSITE_SETUP';
import {renderToString} from 'react-dom/server';
import {Provider as ReduxProvider} from 'react-redux';

const {PAGES} = WEBSITE_SETUP;

export default (PAGE, returnAsHtml, store) => {
    let jsx;
    switch (PAGE.ID) {
    case PAGES.DEVELOPMENT_INDEX_PAGE.ID:
        jsx = <Pages.LandingPage/>;
        break;
        case PAGES.STATIC_PAGES.REPO_LANDINGS_PAGE.ID:
        jsx = <Pages.RepoLandingPage/>;
        break;
    default:
        jsx = null;
        break;
    }
    jsx = <ReduxProvider store={store}>{jsx}</ReduxProvider>;
    return returnAsHtml ? renderToString(jsx) : jsx;
};
