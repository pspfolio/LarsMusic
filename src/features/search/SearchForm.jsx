import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  justify-self: center;
  margin: 32px auto;
  width: 40%;
  position: relative;
`;

const SearchInput = styled(Field)`
  font-family: 'Roboto';
  height: 32px;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  color: #3d3333;
  padding-right: 56px;
  width: 100%;
  box-shadow: 3px 2px 3px 1px rgba(0, 0, 0, 0.01);
  -webkit-appearance: none;
  border: 0;
  outline: 0;

  &::-webkit-input-placeholder {
    color: #cfcffd;
  }
  &::-moz-placeholder {
    color: #cfcffd;
  }
  &:-ms-input-placeholder {
    color: #cfcffd;
  }
  &:-moz-placeholder {
    color: #cfcffd;
  }

  @media (max-width: 769px) {
    width: 75%;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 0;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 5%;
  cursor: pointer;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: #cfcffd;

  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: #7977fb;
  }
`;

const SearchForm = ({ onSubmit }) => (
  <FormWrapper onSubmit={onSubmit}>
    <SearchInput name="search" component="input" type="text" placeholder="Search Artist" />
    <SearchIcon>
      <i class="material-icons">search</i>
    </SearchIcon>
  </FormWrapper>
);

export default reduxForm({ form: 'search' })(SearchForm);
