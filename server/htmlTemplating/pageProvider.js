import scriptsProvider from './scriptsProvider';
import PageToJsxMapper from '../../hybrid/utils/PageToJsxMapper/PageToJsxMapper.jsx';
import pageStoreProvider from '../../hybrid/store/pageStoreProvider';
import WEBSITE_SETUP from "../WEBSITE_SETUP";

const getHeadTag = PAGE => {

    const headTag = `<head>
            <title>${PAGE?.TITLE}</title>
            <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
            <meta id="description" name="description" content="${PAGE.META_DESCRIPTION}"/>
            <script src="https://kit.fontawesome.com/4ba6f840db.js" crossorigin="anonymous"></script>
            <style>@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');</style>
            <link rel="icon" type="image/png" href="/favicon.svg"/>
            ${scriptsProvider.getStylingScripts()}
        </head>`;

    return headTag;
};

const getPageBody = (html, PAGE) => {
    return `<body id="${PAGE?.ID}"><div id="${PAGE?.WRAPPER_ID}">${html}</div></body>`;
};

const addHeaderAndBodyWrapper = (reactHtml, pageOptions, store) => {
    const headTag = getHeadTag(pageOptions);
    const bodyTag = getPageBody(reactHtml, pageOptions);

    return `<!DOCTYPE html>
        	<html lang="nl">
				${headTag}
				${bodyTag}
				${scriptsProvider.getSaveStoreAsWindowObjectScript(store)}
				${scriptsProvider.getBootstrapAppScript()}
        	</html>`;
};

export const getStaticPageHtml = async (PAGE, options) => {
    const store = options?.store;
    const populatedStore = await pageStoreProvider.populateStoreWithPageMetaData({store, pageInfo: PAGE});

    const reactHtml = PageToJsxMapper(PAGE, true, populatedStore);

    const pageHtml = addHeaderAndBodyWrapper(reactHtml, PAGE, populatedStore);
    return pageHtml;
};

/*export const getReposLandingPageHtml = async (options) => {
    const store = options?.store;
    const REPO_LANDING_PAGE = WEBSITE_SETUP.PAGES.REPO_LANDINGS_PAGE;
    const repodata = store.getState();  //...
    const populatedStore = await pageStoreProvider.populateStoreWithPageMetaData({store, REPO_LANDING_PAGE});

    const reactHtml = PageToJsxMapper(PAGE, true, populatedStore);
    const pageHtml = addHeaderAndBodyWrapper(reactHtml, PAGE, populatedStore);
    return pageHtml;
};*/

/*
export const getGenericRepoPageHtml = async (PAGE, options) => {
    const store = options?.store;
    const REPO_LANDING_PAGE = WEBSITE_SETUP.PAGES.REPO_LANDINGS_PAGE;
    const repositoryPopulatedStore = options.repositoryPopulatedStore;
    const REPO_PAGE  = fetchPageMetaDataFromRepoStore(repositoryPopulatedStore);
    const populatedStore = await pageStoreProvider.populateStoreWithPageMetaData({store: repositoryPopulatedStore, REPO_PAGE});

    const reactHtml = '<h1>test<h2>'; //PageToJsxMapper(PAGE, true, populatedStore);
    const pageHtml = addHeaderAndBodyWrapper(reactHtml, PAGE, populatedStore);
    return pageHtml;
};*/
