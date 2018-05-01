import React from 'react';
import { shallow } from 'enzyme';
import ProgressiveBackground from './ProgressiveBackground';
jest.mock('imageLoader');

it('state isLoaded value should be false in init state', () => {
  const component = shallow(<ProgressiveBackground background="background.jpg" placeholder="yolo.jpg" />);
  process.nextTick(() => {
    component.update();
    expect(component.state().isLoaded).toBeTruthy();
  });
});

it('state isLoaded value should be true after imageLoader promise return resolve', () => {
  const component = shallow(<ProgressiveBackground background="background.jpg" placeholder="yolo.jpg" />);
  process.nextTick(() => {
    component.update();
    expect(component.state().isLoaded).toBeTruthy();
  });
});
