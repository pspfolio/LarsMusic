import React from 'react';
import { connect } from 'react-redux';
import { selectArtistsByListId } from 'features/entities/artists/artistsSelectors';
import DashboardLayout from 'features/dashboard//DashboardLayout';
import SearchForm from './SearchForm';
import ArtistList from 'features/artist/artistList/ArtistList';

const Search = ({ searchResult }) => {
  return (
    <DashboardLayout>
      <SearchForm />
      <ArtistList artists={searchResult} />
    </DashboardLayout>
  );
};

const mapStateToProps = state => ({
  searchResult: selectArtistsByListId(state)
});

export default connect(mapStateToProps)(Search);
