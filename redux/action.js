const {createStore} = require('redux');
const increment = require('./reducers')

const store = createStore(increment)

const action = {type : "INCREMENT"}

store.dispatch(action)
console.log(store.getState())
