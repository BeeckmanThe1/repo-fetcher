import {getPageHtml} from '../htmlTemplating/pageProvider';
import WEBSITE_SETUP from '../WEBSITE_SETUP';
import websiteStoreProvider from '../../hybrid/store/websiteStoreProvider';

const init = async router => {

    const sharedStore = await websiteStoreProvider.createAndPopulateStore();
    const {DEVELOPMENT_INDEX_PAGE} = WEBSITE_SETUP.PAGES;

    //  STATIC PAGES

    WEBSITE_SETUP.ALL_STATIC_PAGES.map(PAGE => router.get(PAGE.SLUG, async (req, res) => {
        const html = await getPageHtml(PAGE, {store: sharedStore});
        return res.send(html);
    }));

    //Dynamical repository detail pages

    const sharedStoreState = sharedStore?.getState();
    const repos = sharedStoreState?.website?.repositories?.items || [];
    const getRepoPageMetaData = (repo) => ({
        ID: WEBSITE_SETUP.PAGES.REPO_DETAIL_PAGE.ID,
        WRAPPER_ID: WEBSITE_SETUP.PAGES.REPO_DETAIL_PAGE.WRAPPER_ID,
        TITLE: repo?.name,
        META_DESCRIPTION: repo?.description || 'Generic repo metadescription'
    });
    repos.map(repo => {
        return router.get(repo?.slug, async (req, res) => {
            const PAGE = getRepoPageMetaData(repo);
            const html = await getPageHtml(PAGE, {store: sharedStore, repo});
            return res.send(html);
        });
    });

    //	Development index page

    process.env.ENV === 'development' && router.get(DEVELOPMENT_INDEX_PAGE.SLUG, async (req, res) => {
        const html = await getPageHtml(DEVELOPMENT_INDEX_PAGE, {store: sharedStore});
        return res.send(html);
    });


};

export default {init};
