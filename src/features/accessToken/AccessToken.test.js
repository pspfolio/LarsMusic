import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { AccessToken } from './AccessToken';

const location = { search: 'yolo123' };

describe('Accesstoken component', () => {
  it('renders without crashing', () => {
    shallow(<AccessToken setAccessToken={() => {}} location={location} />);
  });

  it('AccessToken renders correctly', () => {
    const tree = renderer.create(shallow(<AccessToken setAccessToken={() => {}} location={location} />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
