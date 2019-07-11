import React, {Component} from 'react';

export default class List extends Component {
    static defaultProps = {
        data: [
            {name: 'first1'},
            {name: 'second2'}
        ]
    };

    render() {
        const {data} = this.props;
        return <ul>
            {data.map(({name}, key) => <li {...{key}}>{name}</li>)}
        </ul>;
    }
}
