import React from 'react';
import { shallow } from 'enzyme';
import Arrow from '.';

describe('Arrow', () => {
  describe('should render', () => {
    it('the component', () => {
      const wrapper = shallow(<Arrow />);
      const shallowWrapper = wrapper.find('.c-arrow');

      expect(shallowWrapper.exists()).toBe(true);
    });

    it('the component with the default c-arrow--up  modifier', () => {
      const wrapper = shallow(<Arrow />);
      const shallowWrapper = wrapper.find('.c-arrow');

      expect(shallowWrapper.hasClass('c-arrow--up')).toBe(true);
      expect(shallowWrapper.hasClass('c-arrow--down')).toBe(false);
    });

    it('the component with c-arrow--down modifier if hasBuyPriceDecreased is true', () => {
      const wrapper = shallow(<Arrow hasBuyPriceDecreased={true} />);
      const shallowWrapper = wrapper.find('.c-arrow');

      expect(shallowWrapper.hasClass('c-arrow--up')).toBe(false);
      expect(shallowWrapper.hasClass('c-arrow--down')).toBe(true);
    });
  });
});
