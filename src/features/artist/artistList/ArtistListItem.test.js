import React from 'react';
import { shallow } from 'enzyme';
import ArtistListItem from './ArtistListItem';

describe('ArtistListItem component', () => {
  it('renders without crashing', () => {
    shallow(
      <ArtistListItem images={{ url: 'yolo' }} name="yolo" genres={['genre1', 'genre2']} external_urls={'urls'} />
    );
  });

  it('ArtistListItem renders correctly', () => {
    const wrapper = shallow(
      <ArtistListItem images={{ url: 'yolo' }} name="yolo" genres={['genre1', 'genre2']} external_urls={'urls'} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
