import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  margin: 32px 0;
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
  width: 40%;
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
`;

const SearchForm = ({ onSubmit }) => (
  <FormWrapper onSubmit={onSubmit}>
    <SearchInput name="search" component="input" type="text" placeholder="Search Artist" />
  </FormWrapper>
);

export default reduxForm({ form: 'search' })(SearchForm);
