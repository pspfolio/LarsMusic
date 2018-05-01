import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadImage } from 'common/utils/imageLoader';
import styled from 'styled-components';

const BackgroundImage = styled.div`
  height: 100%;
  filter: ${props => (props.isLoaded ? 'none' : `blur(1px)`)};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s linear;
`;

class ProgressiveBackground extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    const { background } = this.props;
    loadImage(background)
      .then(bgImage => {
        this.setState({ isLoaded: true });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { isLoaded } = this.state;
    const { placeholder, background, children } = this.props;
    return (
      <BackgroundImage image={isLoaded ? background : placeholder} isLoaded={isLoaded}>
        {children}
      </BackgroundImage>
    );
  }
}

ProgressiveBackground.propTypes = {
  placeholder: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired
};

export default ProgressiveBackground;
