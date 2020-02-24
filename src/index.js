import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import App from './Components/App'
import reducer from './Reducers'
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
    )

ReactDom.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.querySelector('#root')
)