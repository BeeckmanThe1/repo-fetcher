import ACTION_TYPES from '../ACTION_TYPES';
import axios from 'axios';

const setProjectConstants = () => {
    return {
        type: ACTION_TYPES.WEBSITE.setProjectConstants,
        payload: {
            projectName: 'Repo fetcher'
        }
    }
};

const fetchRepositoriesData = () => {
    return async dispatch => {
        const result = await axios.get('https://api.github.com/users/BeeckmanThe1/repos');
        return dispatch({
            type: ACTION_TYPES.WEBSITE.fetchRepositoriesData,
            payload: {repositories: result?.data}
        });
    };
};

/*
export const setPages = () => {
    return async dispatch => {
        const result = await axios.get('/api/pages');
        return dispatch({
            type: ACTION_TYPES.CMS.SET_PAGES,
            payload: {pages: result?.data}
        });
    }
};*/

export default {setProjectConstants, fetchRepositoriesData};

