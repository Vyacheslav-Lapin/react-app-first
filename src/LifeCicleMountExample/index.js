import React from 'react';

export default class LifeCicleMountExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { events: ['constructor'] };
    }

    componentWillMount() {
        this.setState({ events: [...this.state.events, 'componentWillMount'] });

        setTimeout(() => {
            this.setState({ events: [...this.state.events, 'WillMountDataLoaded'] });
        }, 1000);
    }

    componentDidMount() {
        this.setState({ events: [...this.state.events, 'componentDidMount'] });

        setTimeout(() => {
            this.setState({ events: [...this.state.events, 'DidMountDataLoaded'] });
        }, 1000);
    }

    render() {
        return <ul>
            {this.state.events.map(e => <li>{e}</li>)}
        </ul>;
    }
}