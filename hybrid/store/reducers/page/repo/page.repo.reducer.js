import _ from 'lodash';

export const setRepoPageData = (state, payload) => {
    const newState = _.cloneDeep(state);
    newState.repo = payload?.repo;

    return newState;
};

const reduceCommit = rawCommit => {
    return {
        author: rawCommit?.author?.name,
        date: rawCommit?.author?.date,
        message: rawCommit?.message,
    };
}
export const addCommitsToRepo = (state, payload) => {
    const newState = _.cloneDeep(state);

    const rawCommits = payload?.commits || [];
    const reducedCommits = rawCommits.map(commit => reduceCommit(commit?.commit));
    const newRepo = newState.repo || {};
    newRepo.commits = reducedCommits;
    newState.repo = newRepo;

    return newState;
};
