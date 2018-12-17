import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Grid from '.';
import Panel from '../Panel';
import { generate } from '../utils/dataGenerator';

describe('Grid', () => {
  describe('should render', () => {
    it('the component', () => {
      const wrapper = shallow(<Grid />);
      const shallowWrapper = wrapper.find('.c-grid');

      expect(shallowWrapper.exists()).toBe(true);
    });

    it('the component with 6 <Panel /> components', () => {
      const wrapper = mount(<Grid />);
      wrapper.setState({ data: generate() });
      const panels = wrapper.find(Panel);

      expect(panels.exists()).toBe(true);
      expect(panels).toHaveLength(6);
    });
  });

  describe('should', () => {
    it('call updateState every second', () => {
      const wrapper = shallow(<Grid />);
      const clock = sinon.useFakeTimers();
      const instance = wrapper.instance();
      const updateStateStub = sinon.stub(instance, 'updateState');

      expect(instance.state.data.length).toEqual(0);

      instance.componentDidMount();
      clock.tick(2000);

      expect(updateStateStub.callCount).toEqual(2); // gets called twice in 2 seconds
    });

    it('update the state on componentDidMount call', () => {
      const wrapper = shallow(<Grid />);
      const clock = sinon.useFakeTimers();
      const instance = wrapper.instance();

      expect(instance.state.data.length).toEqual(0);

      instance.componentDidMount();
      clock.tick(2000);

      expect(instance.state.data.length).toEqual(6);
    });
  })
});
