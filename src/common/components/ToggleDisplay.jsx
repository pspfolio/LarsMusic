import React from 'react';
import styled from 'styled-components';

const DisplayWrapper = styled.span`
  display: ${props => (props.show ? 'inline-block' : 'none')};
`;

const ToggleDisplay = ({ show, children }) => <DisplayWrapper show>{children}</DisplayWrapper>;

export default ToggleDisplay;
