import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    shallow(<Header>Yolo</Header>);
  });

  it('Header renders correctly', () => {
    const wrapper = shallow(<Header>Yolo</Header>);
    expect(wrapper).toMatchSnapshot();
  });
});
