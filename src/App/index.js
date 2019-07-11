import React from 'react';
import Card from "../Card";
import List2 from "../List2";
import EventsExample from "../EventsExample";
import List from "../List";
import HookSetStateExample from "../HookSetStateExample";
import HookSetEffectExample from "../HookSetEffectExample";
import logo from '../logo.svg';
import './App.css';

export default function App() {
    // List2.name = "List2"; //not working, but...
    Object.defineProperty(List2, "name", {value: "List2"}); // it works! :)
    return [
        <Card>
            <Card.Body>
                <Card.Title>What is love?</Card.Title>
            </Card.Body>
        </Card>,
        <List2 items={[1, 2, 3, 4, 5, 6]}/>,
        <EventsExample/>,
        <List/>,
        <HookSetStateExample/>,
        <HookSetEffectExample/>,
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
        </header>];
}
