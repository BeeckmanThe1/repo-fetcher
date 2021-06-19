import ACTION_TYPES from '../ACTION_TYPES';
import axios from "axios";

const setPageMetadata = pageInfo => {
    return {
        type: ACTION_TYPES.PAGE.setPageMetadata,
        payload: pageInfo
    };
};

const setPageRepo = (payload) => {
    return {
        type: ACTION_TYPES.PAGE.setPageRepo,
        payload
    };
};

const addCommitsToRepo = (repo) => {
    const repoName = repo?.name;
    return async dispatch => {
        try {
            const result = await axios.get(`https://api.github.com/repos/BeeckmanThe1/${repoName}/commits?per_page=20`, {
                auth: {
                    username: process.env.GITHUB_USERNAME,
                    password: process.env.GITHUB_PASSWORD
                }
            });
            return dispatch({
                type: ACTION_TYPES.PAGE.addCommitsToRepo,
                payload: {commits: result?.data}
            });
        } catch (err) {
            return;  //  TODO: write decent error handling
        }
    }
};

export default {setPageMetadata, setPageRepo, addCommitsToRepo};

