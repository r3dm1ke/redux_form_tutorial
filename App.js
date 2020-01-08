import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Form from './Form';

export default function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

