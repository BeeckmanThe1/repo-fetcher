import pageStoreProvider from '../../store/pageStoreProvider';
import templateProvider from '../../templates/templateProvider';

const processPage = async (request, response, options) => {
    const store = options?.store;
    return pageStoreProvider
        .populateStore({store})
        .then(populatedStore => {
            response.send(templateProvider.getAllWebsiteSectionsAsHtml({...options, store: populatedStore}));
        });
};

export default {processPage};
