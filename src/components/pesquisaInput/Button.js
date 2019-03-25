import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {
      onClick,
      className = '',
      children,
    } = this.props;
    return (
      <button
          onClick={onClick}
          className={className}
          type="button"
        >
        {children}
      </button>
    );
  }
}

/*function Button({onClick, className, children}) {
  return (
    <Button
      onClick={onClick}
      className={className}
      type="button"
    >
      {children}
    </Button>
  )
}
*/

export default Button;