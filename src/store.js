import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import aboutmeReducer from './reducers/aboutmeReducer';
import projectsReducer from './reducers/projectsReducer';
import freelanceReducer from './reducers/freelanceReducer';
import blogReducer from './reducers/blogReducer';
import resumeReducer from './reducers/resumeReducer';
import contactReducer from './reducers/contactReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    aboutMe: aboutmeReducer,
    projects: projectsReducer,
    freelance: freelanceReducer,
    blog: blogReducer,
    resume: resumeReducer,
    contact: contactReducer
});

const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(thunk))
);

export default store;