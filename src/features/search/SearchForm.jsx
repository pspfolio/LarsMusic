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
  letter-spacing: 0.8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  color: #171745;
  width: 40%;
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.1);
  -webkit-appearance: none;
  border: 0;
  outline: 0;

  &::-webkit-input-placeholder {
    color: #9899be;
  }
  &::-moz-placeholder {
    color: #9899be;
  }
  &:-ms-input-placeholder {
    color: #9899be;
  }
  &:-moz-placeholder {
    color: #9899be;
  }
`;

const SearchForm = ({ onSubmit }) => (
  <FormWrapper onSubmit={onSubmit}>
    <SearchInput name="search" component="input" type="text" placeholder="Search Artist" />
  </FormWrapper>
);

export default reduxForm({ form: 'search' })(SearchForm);
