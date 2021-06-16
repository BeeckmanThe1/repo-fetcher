import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import website from './reducers/website/website.reducer';
import page from './reducers/page/page.reducer';

const applyMiddlewareSetup = composeWithDevTools(applyMiddleware(ReduxThunk));

const reducer = combineReducers({
    website,
    page
});

export default (initialState) => createStore(reducer, initialState, applyMiddlewareSetup);
