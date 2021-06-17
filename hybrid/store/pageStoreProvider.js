import pageAction from './actions/page/page.action';


const populateStore = (options) => {
    const promises = [];

    const store = options?.store;
    const repo = options?.repo;

    promises.push(store.dispatch(pageAction.setPageMetadata(options?.pageInfo)));
    promises.push(store.dispatch(pageAction.setPageRepo({repo})));

    return Promise.all(promises).then(() => store);
};

export default {
    populateStore
};
