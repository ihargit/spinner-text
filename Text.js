/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react';

class Text extends Component {
  componentDidMount() {
    const p = this.props;
    p.store.dispatch(p.fn(p.sr));
  }
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

Text.propTypes = {
  text: PropTypes.string.isRequired
}

export default Text;
