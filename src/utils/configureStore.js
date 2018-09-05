import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistentState = loadState();

  const store = createStore(
    rootReducer,
    persistentState,
    applyMiddleware(thunk)
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};


export default configureStore;
