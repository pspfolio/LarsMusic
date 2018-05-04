import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Login from './Login';

describe('Login component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('Login renders correctly', () => {
    const tree = renderer.create(shallow(<Login />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
