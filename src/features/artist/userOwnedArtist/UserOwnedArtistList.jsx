import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchUserArtists } from 'features/entities/userArtists/userArtistActions';
import { selectUserArtists } from 'features/entities/userArtists/userArtistSelectors';
import Header from 'common/components/header/Header';
import ArtistList from '../artistList/ArtistList';

const EmptyStateText = styled.p`
  font-size: 24px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`;

const LinkToSearch = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.primaryColor};
`;

class UserOwnedArtistList extends Component {
  componentDidMount() {
    const { fetchUserArtists } = this.props;
    fetchUserArtists();
  }
  render() {
    const { artists } = this.props;
    return (
      <Fragment>
        <Header>Oma musiikki</Header>
        {artists.length ? (
          <ArtistList artists={artists} />
        ) : (
          <EmptyStateText>
            Plöh, etkö ole lisännyt yhtään albumia arkistoosi? <LinkToSearch to="/search">Etsi</LinkToSearch> artisteja.
          </EmptyStateText>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  artists: selectUserArtists(state, ownProps.itemCount)
});

const mapDispatchToProps = dispatch => ({
  fetchUserArtists: () => dispatch(fetchUserArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOwnedArtistList);
