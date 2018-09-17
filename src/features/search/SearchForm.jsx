import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import styled from 'styled-components';
import { fetchSearch } from './searchActions';

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  justify-self: center;
  margin: 32px auto;
  width: 40%;
  position: relative;
`;

class SearchForm extends Component {
  handleFormSubmit = event => {
    const { executeSearch, onSubmit } = this.props;
    if (event) event.preventDefault();
    executeSearch();
    if (onSubmit) onSubmit();
  };

  render() {
    return (
      <FormWrapper onSubmit={this.handleFormSubmit}>
        <SearchInput handleIconClick={this.handleFormSubmit} />
      </FormWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  executeSearch: () => dispatch(fetchSearch())
});

export default connect(null, mapDispatchToProps)(SearchForm);
