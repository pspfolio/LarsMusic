import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectUserDisplayName } from './userSelectors';

const UserNameParagraph = styled.p`
  color: #3d3333;
`;

const UserName = ({ displayName }) => <UserNameParagraph>{displayName}</UserNameParagraph>;

const mapStateToProps = state => ({
  displayName: selectUserDisplayName(state)
});

export default connect(mapStateToProps)(UserName);
