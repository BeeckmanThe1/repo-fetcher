import initialState from '../../initialState';
import ACTION_TYPES from '../../actions/ACTION_TYPES';
import {setProjectConstants} from './constants/website.constants.reducer';
import {setRepositories, rankRepo} from './repositories/website.repositories.reducer';

export default function (state, action) {
    switch (action.type) {
    case ACTION_TYPES.WEBSITE.setProjectConstants:
        return setProjectConstants(state, action?.payload);
    case ACTION_TYPES.WEBSITE.fetchRepositoriesData:
        return setRepositories(state, action?.payload);
    case ACTION_TYPES.WEBSITE.rankRepo:
        return rankRepo(state, action?.payload);
    default:
        return state || initialState.loadInitials().website;
    }
}
