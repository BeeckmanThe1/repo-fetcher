import _ from 'lodash';

export const setProjectConstants = (state, payload) => {
    const newState = _.cloneDeep(state);
    const newWebsiteConstants = newState.websiteConstants = {};

    newWebsiteConstants.projectName = payload?.projectName;

    return newState;
};
