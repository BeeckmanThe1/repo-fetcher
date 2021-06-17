import {getStaticPageHtml, getReposLandingPageHtml} from '../htmlTemplating/pageProvider';
import WEBSITE_SETUP from '../WEBSITE_SETUP';
import websiteStoreProvider from '../../hybrid/store/websiteStoreProvider';

const init = async router => {

    const sharedStore = await websiteStoreProvider.createAndPopulateStore();
    const {DEVELOPMENT_INDEX_PAGE} = WEBSITE_SETUP.PAGES;

    //  STATIC PAGES

    WEBSITE_SETUP.ALL_STATIC_PAGES.map(PAGE => router.get(PAGE.SLUG, async (req, res) => {
        const html = await getStaticPageHtml(PAGE, {store: sharedStore});
        return res.send(html);
    }));

    //	Development index page

    process.env.ENV === 'development' && router.get(DEVELOPMENT_INDEX_PAGE.SLUG, async (req, res) => {
        const html = await getStaticPageHtml(DEVELOPMENT_INDEX_PAGE, {store: sharedStore});
        return res.send(html);
    });
};

export default {init};
