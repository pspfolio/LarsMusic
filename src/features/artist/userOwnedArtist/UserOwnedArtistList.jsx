import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserArtists } from 'features/entities/userArtists/userArtistActions';
import { selectUserArtists } from 'features/entities/userArtists/userArtistSelectors';
import Header from 'common/components/header/Header';
import ArtistList from '../artistList/ArtistList';

class DashboardArtistList extends Component {
  componentDidMount() {
    const { getUserArtists } = this.props;
    getUserArtists();
  }
  render() {
    const { artists } = this.props;

    return (
      <div>
        <Header>Oma musiikki</Header>
        <ArtistList artists={artists} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  artists: selectUserArtists(state, ownProps.itemCount)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUserArtists: () => dispatch(fetchUserArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardArtistList);
