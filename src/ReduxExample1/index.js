import {createStore} from 'redux';
import React from 'react';

const reducer = (state = 0, action) => {
    switch (action.type) {
    case 'INCREMENT':
        return state + 1;
    case 'DECREMENT':
        return state - 1;
    default:
        return state;
    }
};
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(reducer, reduxDevtools && reduxDevtools());

// Функция `subscribe` является частью реализации паттерна Observer
// Каждый ее вызов, добавляет в список наблюдателей новую функцию
// Затем, как только меняются данные в хранилище, вызываются
// по очереди все наблюдатели:

export default function ReduxExample1(props) {

    store.subscribe(() => console.log(store.getState()));
    const incrementAction = {type: 'INCREMENT'};
    store.dispatch(incrementAction);// => 1
    store.dispatch(incrementAction);// => 2
    const decrementAction = {type: 'DECREMENT'};
    store.dispatch(decrementAction);// => 1
    return <div>123</div>;
}

