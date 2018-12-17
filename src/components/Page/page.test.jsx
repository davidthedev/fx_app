import React from 'react';
import { shallow } from 'enzyme';
import Page from '.';
import Grid from '../Grid';

describe('Page', () => {
  describe('should render', () => {
    it('the heading with valid text', () => {
      const wrapper = shallow(<Page />);
      const shallowWrapper = wrapper.find('.c-page');

      expect(shallowWrapper.exists()).toBe(true);
      expect(shallowWrapper.text()).toBe('FX Trading App');
    });

    it('the <Grid />', () => {
      const wrapper = shallow(<Page />);
      const shallowWrapper = wrapper.find(Grid);

      expect(shallowWrapper.exists()).toBe(true);
    });
  });
});
