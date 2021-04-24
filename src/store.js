import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    aboutMe: aboutmeReducer,
    projects: projectsReducer,
    blog: blogReducer,
    resume: resumeReducer,
    contact: contactReducer
});

const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(thunk))
);

export default store;