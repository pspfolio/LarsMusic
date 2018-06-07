import React from 'react';
import styled from 'styled-components';

const DisplayWrapper = styled.span`
  display: ${props => (props.show ? 'inline-block' : 'none')};
  width: 100%;
`;

const ToggleDisplay = ({ show, children }) => <DisplayWrapper show={show}>{children}</DisplayWrapper>;

export default ToggleDisplay;
