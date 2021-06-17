import _ from 'lodash';

export const setRepoPageData = (state, payload) => {
    const newState = _.cloneDeep(state);
    const newRepo = newState.repo = payload?.repo;

    return newState;
};
