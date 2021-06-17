import initialState from '../../initialState';
import ACTION_TYPES from '../../actions/ACTION_TYPES';
import {setProjectPageInfo} from './metadata/page.metdata.reducer';
import {setRepoPageData} from './repo/page.repo.reducer';

export default function (state, action) {
    switch (action.type) {
    case ACTION_TYPES.PAGE.setPageMetadata:
        return setProjectPageInfo(state, action?.payload);
        case ACTION_TYPES.PAGE.setPageRepo:
            return setRepoPageData(state, action?.payload);
    default:
        return state || initialState.loadInitials().page;
    }
}
