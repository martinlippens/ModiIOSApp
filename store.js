import {createStore, applyMiddleware} from 'redux';
import config from './redux/reducers'

// const middlewares = applyMiddleware(createLogger())
const middlewares = applyMiddleware()
const store = createStore(config ,middlewares)

export default store