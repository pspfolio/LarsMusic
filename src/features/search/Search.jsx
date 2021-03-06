import React from 'react';
import { connect } from 'react-redux';
import { selectArtistsByListId } from 'features/entities/artists/artistsSelectors';
import styled from 'styled-components';
import DashboardLayout from 'features/dashboard//DashboardLayout';
import SearchForm from './SearchForm';
import ArtistList from 'features/artist/artistList/ArtistList';

const NoSearchResults = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.primaryColor};
`;

class Search extends React.Component {
  renderContent() {
    const { searchResult } = this.props;
    return searchResult.length ? (
      <ArtistList artists={searchResult} />
    ) : (
      <NoSearchResults>Ei hakutuloksia, so sad :(</NoSearchResults>
    );
  }

  render() {
    return (
      <DashboardLayout>
        <SearchForm onSubmit={() => this.setState({ searched: true })} />
        {this.renderContent()}
      </DashboardLayout>
    );
  }
}

const mapStateToProps = state => ({
  searchResult: selectArtistsByListId(state)
});

export default connect(mapStateToProps)(Search);
