import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from '/ducks/root';
import rootEpic from '/epics/root';

export default createStore(
	rootReducer,
	applyMiddleware(rootEpic, logger)
);
