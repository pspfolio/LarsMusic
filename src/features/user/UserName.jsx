import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchUserProfile } from './userActions';
import { selectUserDisplayName } from './userSelectors';

const UserNameParagraph = styled.p`
  color: white;
`;

class UserName extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }
  render() {
    const { displayName } = this.props;
    return <UserNameParagraph>{displayName}</UserNameParagraph>;
  }
}

const mapStateToProps = state => ({
  displayName: selectUserDisplayName(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => {
    dispatch(fetchUserProfile());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserName);
