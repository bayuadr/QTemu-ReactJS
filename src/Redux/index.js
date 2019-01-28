import {createStore,applyMiddleware} from 'redux'
import {reducers} from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
     reducers,
     composeWithDevTools(
         applyMiddleware(thunk,logger)
         )
    )

export default store