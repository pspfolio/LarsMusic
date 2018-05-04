import React from 'react';
import { shallow } from 'enzyme';
import { AccessToken } from './AccessToken';

const location = { search: 'yolo123' };

describe('Accesstoken component', () => {
  it('renders without crashing', () => {
    shallow(<AccessToken setAccessToken={() => {}} location={location} />);
  });

  it('AccessToken renders correctly', () => {
    const wrapper = shallow(<AccessToken setAccessToken={() => {}} location={location} />);
    expect(wrapper).toMatchSnapshot();
  });
});
