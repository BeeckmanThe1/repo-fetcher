import _ from 'lodash';

const reduceRepository = repo => {
    return {
        name: repo?.name,
        fullName: repo?.full_name,
        description: repo?.description
    }
};

export const setRepositories = (state, payload) => {
    const newState = _.cloneDeep(state);
    const newRepositories = newState.repositories = {};
    const rawRepositories = payload?.repositories || [];

    newRepositories.items = rawRepositories.map(rawRepo => reduceRepository(rawRepo));

    return newState;
};
