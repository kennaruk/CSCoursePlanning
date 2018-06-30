import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './App';
import RouteManagement from './RouteManagement';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

var semester_1 = require('./components/semester_1.json')
var semester_2 = require('./components/semester_2.json')

var arr1 = []
var arr2 = []

semester_1.map((item, i) => {
  arr1.push(item)
})

semester_2.map((item, i) => {
  arr2.push(item)
})

var arr_merge = arr1.concat(arr2)

const initialState = {
  // Header.js
  openDrawer: false,

  // Body.js
  value: 0,
  semester: 0,
  courses: [],

  // TabFilterList.js
  initialItems: arr_merge,
  items: [],

  // TabFilterList.js => List,
  data: arr_merge,
  selectedRows: [],
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
