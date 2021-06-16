import ACTION_TYPES from '../ACTION_TYPES';

const setPageMetadata = pageInfo => {
    return {
        type: ACTION_TYPES.PAGE.setPageMetadata,
        payload: pageInfo
    };
};

export default {setPageMetadata};

