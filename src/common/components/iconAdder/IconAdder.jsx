import React, { Component } from 'react';

class IconAdder extends Component {
  render() {
    const { tag, src, alt, onClick, children, ...rest } = this.props;
    const Tag = tag;
    return (
      <Tag onClick={onClick} {...rest}>
        <img src={src} alt={alt} />
        {children}
      </Tag>
    );
  }
}

export default IconAdder;
