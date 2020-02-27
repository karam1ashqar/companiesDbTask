import {createStore} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import companiesReducer from './redux/reducers/companiesReducer';

const persistConfig = {
  key: 'root',
  keyPrefix: '',
  storage: AsyncStorage,
};

const persistCombinedReducers = persistCombineReducers(persistConfig, {
  companies: companiesReducer,
});

export default () => {
  let store = createStore(persistCombinedReducers);
  let persistor = persistStore(store);

  return {store, persistor};
};
