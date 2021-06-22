import ACTION_TYPES from '../ACTION_TYPES';
import axios from 'axios';

const setProjectConstants = () => {
    return {
        type: ACTION_TYPES.WEBSITE.setProjectConstants,
        payload: {
            projectName: 'Repo fetcher'
        }
    };
};

const fetchRepositoriesData = () => {
    return async dispatch => {
        try {
            const result = await axios.get(`https://api.github.com/users/${process.env.GITHUB_REPO_OWNER}/repos`, {
                auth: {
                    username: process.env.GITHUB_USERNAME,
                    password: process.env.GITHUB_PASSWORD
                }
            });
            return dispatch({
                type: ACTION_TYPES.WEBSITE.fetchRepositoriesData,
                payload: {repositories: result?.data}
            });
        } catch (err) {
            return;     //  TODO: write decent error handling
        }
    };
};

const rankRepo = (repoName, ranking) => {
    return {
        payload: {repoName, ranking},
        type: ACTION_TYPES.WEBSITE.rankRepo
    };
};

export default {setProjectConstants, fetchRepositoriesData, rankRepo};

