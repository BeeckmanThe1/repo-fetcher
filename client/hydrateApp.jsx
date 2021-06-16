import ReactDOM from 'react-dom';
import PageToJsxMapper from '../hybrid/utils/PageToJsxMapper/PageToJsxMapper.jsx';
import WEBSITE_SETUP from '../server/WEBSITE_SETUP';
import _ from 'lodash';
import createStore from '../hybrid/store/store';
import CONSTANTS from '../hybrid/CONSTANTS';


const hydrateServerRenderedContent = () => {
    try {
        const serverProcessedReduxData = _.get(window, CONSTANTS.REDUX_STORE_KEY) || {};
        const store = createStore(serverProcessedReduxData);

        const currentPageId = document.getElementsByTagName('body')[0].id;
        const PAGE = WEBSITE_SETUP.ALL_STATIC_PAGES.find(PAGE => PAGE.ID === currentPageId);
        const appNode = document.getElementById(PAGE.WRAPPER_ID);
        const jsx = PageToJsxMapper(PAGE,false, store);
        ReactDOM.hydrate(jsx, appNode);
        console.log('Succesfully hydrated page:', PAGE.TITLE);
    } catch (err) {
        //TODO
    }
};
hydrateServerRenderedContent();
