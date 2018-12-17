import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Indicator from '.';

const props = {
  value: '1.24564',
  currency: 'GBP',
  variant: 'sell',
  indicatorInFocus: null,
  onMouseOver: () => {},
  onMouseOver: () => {}
};

describe('should render', () => {
  it('the component with valid data attribute', () => {
    const wrapper = shallow(<Indicator {...props} />);
    const shallowWrapper = wrapper.find('.c-indicator');

    expect(shallowWrapper.exists()).toBe(true);
    expect(shallowWrapper.prop('data-id')).toEqual('sell');
  });

  it('the component with currency section and valid string', () => {
    const wrapper = shallow(<Indicator {...props} />);
    const currencySection = wrapper.find('.c-indicator__currency');

    expect(currencySection.exists()).toBe(true);
    expect(currencySection.text()).toEqual('Sell GBP');
  });

  it('the component with value section and valid strings', () => {
    const wrapper = shallow(<Indicator {...props} />);
    const currencySection = wrapper.find('.c-indicator__value');
    const currencySectionValues = currencySection.find('span');

    expect(currencySection.exists()).toBe(true);
    expect(currencySectionValues).toHaveLength(3);
    expect(currencySectionValues.at(0).text()).toEqual('1.24');
    expect(currencySectionValues.at(1).text()).toEqual('56');
    expect(currencySectionValues.at(2).text()).toEqual('4');
  });

  it('the component with valid classes when the variant is "sell"', () => {
    const wrapper = shallow(<Indicator {...props} />);
    const shallowWrapper = wrapper.find('.c-indicator');

    expect(shallowWrapper.hasClass('c-indicator--sell')).toBe(true);
    expect(shallowWrapper.hasClass('c-indicator--sell-blur')).toBe(true);
  });

  it('the component with valid class when the variant is "sell" and is not in focus', () => {
    const modifiedProps = {
      ...props,
      indicatorInFocus: 'buy'
    };
    const wrapper = shallow(<Indicator {...modifiedProps} />);
    const shallowWrapper = wrapper.find('.c-indicator');

    expect(shallowWrapper.hasClass('c-indicator--blur')).toBe(true);
  });

  it('the component with valid class when the variant is "sell" and is in focus', () => {
    const modifiedProps = {
      ...props,
      indicatorInFocus: 'sell'
    };
    const wrapper = shallow(<Indicator {...modifiedProps} />);
    const shallowWrapper = wrapper.find('.c-indicator');

    expect(shallowWrapper.hasClass('c-indicator--sell-focus')).toBe(true);
  });

  it('the component with valid classes when the variant is "buy"', () => {
    const modifiedProps = {
      ...props,
      variant: 'buy'
    };
    const wrapper = shallow(<Indicator {...modifiedProps} />);
    const shallowWrapper = wrapper.find('.c-indicator');

    expect(shallowWrapper.hasClass('c-indicator--buy')).toBe(true);
    expect(shallowWrapper.hasClass('c-indicator--buy-blur')).toBe(true);
  });

  it('the component with valid class when the variant is "buy" and is not in focus', () => {
    const modifiedProps = {
      ...props,
      indicatorInFocus: 'buy'
    };
    const wrapper = shallow(<Indicator {...modifiedProps} />);
    const shallowWrapper = wrapper.find('.c-indicator');

    expect(shallowWrapper.hasClass('c-indicator--blur')).toBe(true);
  });

  it('the component with valid class when the variant is "buy" and is in focus', () => {
    const modifiedProps = {
      ...props,
      variant: 'buy',
      indicatorInFocus: 'buy'
    };
    const wrapper = shallow(<Indicator {...modifiedProps} />);
    const shallowWrapper = wrapper.find('.c-indicator');

    expect(shallowWrapper.hasClass('c-indicator--buy-focus')).toBe(true);
  });
});

describe('should not render', () => {
  it('the component with currency section and if no variant was provided', () => {
    const modifiedProps = {
      ...props,
      variant: undefined
    };
    const wrapper = shallow(<Indicator {...modifiedProps} />);
    const currencySection = wrapper.find('.c-indicator__currency');

    expect(currencySection.exists()).toBe(false);
  });

  it('the component with value section and if no value was provided', () => {
    const modifiedProps = {
      ...props,
      value: undefined
    };
    const wrapper = shallow(<Indicator {...modifiedProps} />);
    const currencySection = wrapper.find('.c-indicator__value');
    const currencySectionValues = currencySection.find('span');

    expect(currencySection.exists()).toBe(false);
    expect(currencySectionValues).toHaveLength(0);
  });
});

describe('should call', () => {
  it('onMouseOver', () => {
    const stub = sinon.stub();

    const modifiedProps = {
      ...props,
      onMouseOver: stub
    };

    const wrapper = shallow(<Indicator {...modifiedProps} />);
    wrapper.simulate('mouseover');

    expect(stub.callCount).toEqual(1);
  });

  it('onMouseOut', () => {
    const stub = sinon.stub();

    const modifiedProps = {
      ...props,
      onMouseOut: stub
    };

    const wrapper = shallow(<Indicator {...modifiedProps} />);
    wrapper.simulate('mouseout');

    expect(stub.callCount).toEqual(1);
  });
});
