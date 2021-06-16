import initialState from '../../initialState';
import ACTION_TYPES from '../../actions/ACTION_TYPES';
import {setProjectPageInfo} from './constants/website.constants.reducer';

export default function (state, action) {
    switch (action.type) {
    case ACTION_TYPES.PAGE.setPageMetadata:
        return setProjectPageInfo(state, action?.payload);
    default:
        return state || initialState.loadInitials().page;
    }
}
