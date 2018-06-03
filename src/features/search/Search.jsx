import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from './searchActions';
import { selectArtistsByListId } from 'features/artist/artistSelectors';
import DashboardLayout from 'features/dashboard//DashboardLayout';
import SearchForm from './SearchForm';
import ArtistList from 'features/artist/artistList/ArtistList';

const Search = ({ executeSearch, searchResult }) => {
  return (
    <DashboardLayout>
      <SearchForm
        onSubmit={event => {
          event.preventDefault();
          executeSearch();
        }}
      />
      <ArtistList artists={searchResult} />
    </DashboardLayout>
  );
};

const mapStateToProps = state => ({
  searchResult: selectArtistsByListId(state)
});

const mapDispatchToProps = dispatch => ({
  executeSearch: () => dispatch(fetchSearch())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
