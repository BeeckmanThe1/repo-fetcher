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
            const result = await axios.get('https://api.github.com/users/BeeckmanThe1/repos', {
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

export default {setProjectConstants, fetchRepositoriesData};

