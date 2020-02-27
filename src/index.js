import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './store';
const {store, persistor} = reduxStore();
import Home from './screens/homeScreen';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
