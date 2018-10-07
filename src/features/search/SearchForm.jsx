import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import styled from 'styled-components';
import { fetchSearch } from './searchActions';
import { devices } from 'common/utils/styledUtils';

console.log('devices', devices);

const Form = styled.form`
  display: flex;
  justify-content: center;
  justify-self: center;
  margin: 32px auto;
  width: 40%;
  position: relative;

  ${devices.md`
    width: 100%;
  `};
`;

class SearchForm extends Component {
  handleFormSubmit = event => {
    const { executeSearch, onSubmit } = this.props;
    if (event) event.preventDefault();
    executeSearch();
    onSubmit();
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <SearchInput handleIconClick={this.handleFormSubmit} />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  executeSearch: () => dispatch(fetchSearch())
});

export default connect(null, mapDispatchToProps)(SearchForm);
