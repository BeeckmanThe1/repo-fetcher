import _ from 'lodash';

const reduceRepository = repo => {
    return {
        name: repo?.name,
        fullName: repo?.full_name,
        description: repo?.description,
        slug: `/${repo?.name}`,
        userName: repo?.owner?.login
    };
};

export const setRepositories = (state, payload) => {
    const newState = _.cloneDeep(state);
    const newRepositories = newState.repositories = {};
    const rawRepositories = payload?.repositories || [];

    newRepositories.items = rawRepositories.map(rawRepo => reduceRepository(rawRepo));
    newRepositories.githubOwner = process.env.GITHUB_REPO_OWNER;

    return newState;
};

export const rankRepo = (state, payload) => {
    const newState = _.cloneDeep(state);
    const newRepositories = newState.repositories.items || [];
    const newRepo = newRepositories.find(repo => repo?.name === payload?.repoName);
    newRepo.ranking = payload?.ranking;
    newState.repositories.items = newRepositories;

    return newState;
};
