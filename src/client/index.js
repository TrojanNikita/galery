import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import PhotostoreService from './../services/photostore-service';
import createClient from '../services/create-client';
import ErrorBoundry from './components/error-boundry';
import { PhotostoreServiceProvider } from './components/photostore-service-context';

import { StoreProvider } from "./store/useStore";

import App from './components/app';

//если в loacalstorage нет клиента отправляем запрос
if(!localStorage.getItem('id')){
    createClient({name: 'trojan', allowedGrantTypes:['password', 'refresh_token']});
}

const photostoreService = new PhotostoreService();

ReactDOM.render(
  <StoreProvider>
    <ErrorBoundry>
      <PhotostoreServiceProvider value={photostoreService}>
        <Router>
          <App />
        </Router>
      </PhotostoreServiceProvider>
    </ErrorBoundry>
  </StoreProvider>,
  document.getElementById('root'));

// module.hot.accept();
