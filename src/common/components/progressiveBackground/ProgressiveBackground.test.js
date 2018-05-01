import React from 'react';
import { shallow } from 'enzyme';
import ProgressiveBackground from './ProgressiveBackground';
import { loadImage } from 'common/utils/imageLoader';
jest.mock('common/utils/imageLoader');

it('should render component', () => {
  loadImage.mockReturnValueOnce({
    prop1: new Promise(resolve => resolve, 200)
  });
  const component = shallow(<ProgressiveBackground />);
  console.log(component);
});
