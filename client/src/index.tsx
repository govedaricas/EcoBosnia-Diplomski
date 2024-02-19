import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import {  router} from './Router/Router.tsx'

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux'
import { store } from './app/store/configureStore.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
