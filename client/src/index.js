import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './App';
import RouteManagement from './RouteManagement';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
  // Header.js
  openDrawer: false,

  // Body.js
  value: 0,
  semester: 0,
  courses: [],

}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        openDrawer: !state.openDrawer
      }
    case 'HANDLE_YEAR':
      return {
        ...state,
        value: action.value
      }
    case 'HANDLE_SEMESTER_0':
      return {
        ...state,
        semester: action.semester
      }
    case 'HANDLE_SEMESTER_1':
      return {
        ...state,
        semester: action.semester
      }
    case 'HANDLE_SEMESTER_2':
      return {
        ...state,
        semester: action.semester
      }
    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')

);
registerServiceWorker();
