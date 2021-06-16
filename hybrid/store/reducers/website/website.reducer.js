import initialState from '../../initialState';
import ACTION_TYPES from '../../actions/ACTION_TYPES';
import {setProjectConstants} from './constants/website.constants.reducer';

export default function (state, action) {
    switch (action.type) {
    case ACTION_TYPES.WEBSITE.setProjectConstants:
        return setProjectConstants(state, action?.payload);
    default:
        return state || initialState.loadInitials().website;
    }
}
