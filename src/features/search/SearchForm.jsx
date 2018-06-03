import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const SearchInput = styled(Field)`
  font-family: 'Roboto';
  height: 32px;
  font-size: 18px;
  letter-spacing: 0.8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.86);
  width: 40%;
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.03);
  -webkit-appearance: none;
  border: 0;
  outline: 0;

  &::-webkit-input-placeholder {
    color: #caced2;
  }
  &::-moz-placeholder {
    color: #caced2;
  }
  &:-ms-input-placeholder {
    color: #caced2;
  }
  &:-moz-placeholder {
    color: #caced2;
  }
`;

const SearchForm = ({ onSubmit }) => (
  <FormWrapper onSubmit={onSubmit}>
    <SearchInput name="search" component="input" type="text" placeholder="Search Artist" />
  </FormWrapper>
);

export default reduxForm({ form: 'search' })(SearchForm);
