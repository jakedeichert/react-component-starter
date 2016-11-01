import React, { PropTypes } from 'react';

export default class MyComponent extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        {text}
      </div>
    );
  }
}

MyComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
