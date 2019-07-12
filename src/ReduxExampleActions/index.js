import {createAction, handleActions} from 'redux-actions';
import {createStore, combineReducers} from 'redux';
import React from 'react';
// import * as actions from './actions';

const addUser = createAction('USER_ADD');//func
// const updateUser = createAction('USER_UPDATE');//func
store.dispatch(addUser(/* ... */));
// store.dispatch(updateUser(/* ... */));

const s = addUser.toString();
const handlers = {
    [s](state, {payload: {user}}) {
        return {...state, [user.id]: user};
    },
};

const usersReducer = handleActions(handlers, {});
combineReducers({users: usersReducer,});

const reducer = (state = [], action) => {
    switch (action.type) {
    case 'USER_ADD': {
        const {user} = action.payload;
        return [...state, user];
    }
    case 'USER_REMOVE': {
        const {id} = action.payload;
        return state.filter(u => u.id !== id); // Immutability

    }
    default:
        return state;
    }
};

const store = createStore(reducer);

export default function ReduxExampleAction(props) {
    store.subscribe(
        () => console.log(store.getState()));

    const user = {name: 'Вася Пупкин'};
    const addUser = {type: 'USER_ADD', payload: {user}};
    store.dispatch(addUser);
    return <div>456</div>;
}

