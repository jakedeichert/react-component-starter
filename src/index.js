import React, { PropTypes } from 'react';

export default class MyComponent extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    }

    render() {
        const { text } = this.props;
        return <div>
            {text}
        </div>;
    }
}
