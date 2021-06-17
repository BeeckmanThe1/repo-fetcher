import pageAction from './actions/page/page.action';


const populateStoreWithPageMetaData = (options) => {
    const promises = [];

    const store = options?.store;

    promises.push(store.dispatch(pageAction.setPageMetadata(options?.pageInfo)));

    return Promise.all(promises).then(() => store);
};
const populateStoreWithRepoData = (options) => {
    const promises = [];

    const store = options?.store;

    promises.push(store.dispatch(pageAction.setPageMetadata(options?.pageInfo)));

    return Promise.all(promises).then(() => store);
};

export default {
    populateStoreWithPageMetaData, populateStoreWithRepoData
};
