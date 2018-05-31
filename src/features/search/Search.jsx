import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Search = props => {
  return (
    <form onSubmit={() => {}}>
      <label htmlFor="search">Search</label>
      <Field name="search" component="input" type="text" />
    </form>
  );
};

export default reduxForm({ form: 'search' })(Search);
