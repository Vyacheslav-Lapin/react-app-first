import {createStore} from 'redux';
import React from 'react';

const reducer = (state = [], action) => {
    // инициализация состояния
    switch (action.type) {
    case 'USER_ADD': {
        const {user} = action.payload;
        // данные
        return [...state, user];
        // Immutability
    }
    case 'USER_REMOVE': {
        const {id} = action.payload;
        // данные
        return state.filter(u => u.id !== id); // Immutability

    }
    default:
        return state;
    }
};

const store = createStore(reducer);

export default function ReduxExample2 (props) {
    store.subscribe(
        () => console.log(store.getState()));

    const user = {name: 'Вася Пупкин'};
    const addUser = {type: 'USER_ADD', payload: {user}};
    store.dispatch(addUser);
    return <div>456</div>;
}
