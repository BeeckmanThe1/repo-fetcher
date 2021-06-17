import _ from 'lodash';

export const setRepoPageData = (state, payload) => {
    const newState = _.cloneDeep(state);
    newState.repo = payload?.repo;

    return newState;
};
