import ACTION_TYPES from '../ACTION_TYPES';

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

export default {setPageMetadata, setPageRepo};

