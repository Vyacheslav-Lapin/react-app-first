import React, {Component} from 'react';
import List from "../List";
import HookSetStateExample from "../HookSetStateExample";
import HookSetEffectExample from "../HookSetEffectExample";
import logo from '../logo.svg';
import './App.css';

export default class App extends Component {

    /*<List data={items}/>,*/
    render() {
        return [
            <List/>,
            <HookSetStateExample/>,
            <HookSetEffectExample/>,
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>];

        // const items = [
        //     {name: 'first'},
        //     {name: 'second'}
        // ];
    }
}
