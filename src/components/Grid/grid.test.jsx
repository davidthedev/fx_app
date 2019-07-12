import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import connectedGrid, { Grid } from ".";
import Panel from "../Panel";
import { generate } from "../utils/dataGenerator";

import configureStore from "redux-mock-store";

const mockStore = configureStore({ quotes: {}, tiles: {} });

function setup(isFetching = true) {
  const props = {
    quotes: {
      isFetching
    },
    tiles: {},
    dispatch: jest.fn()
  };

  const wrapper = shallow(<Grid {...props} />);

  return {
    props,
    wrapper
  };
}

describe("Grid", () => {
  it("should render loading state", () => {
    const { wrapper, props } = setup();

    expect(props.dispatch.mock.calls.length).toBe(1);
    expect(wrapper.find("div").text()).toEqual("Loading...");
  });

  // TODO convert tests
  // describe("should render", () => {
  //   it("the component", () => {
  //     const wrapper = shallow(<Grid />);
  //     const shallowWrapper = wrapper.find(".c-grid");

  //     expect(shallowWrapper.exists()).toBe(true);
  //   });

  //   it("the component with 6 <Panel /> components", () => {
  //     const wrapper = mount(<Grid />);
  //     wrapper.setState({ data: generate() });
  //     const panels = wrapper.find(Panel);

  //     expect(panels.exists()).toBe(true);
  //     expect(panels).toHaveLength(6);
  //   });
  // });

  // describe("should", () => {
  //   it("call updateState every second", () => {
  //     const wrapper = shallow(<Grid />);
  //     const clock = sinon.useFakeTimers();
  //     const instance = wrapper.instance();
  //     const updateStateStub = sinon.stub(instance, "updateState");

  //     expect(instance.state.data.length).toEqual(0);

  //     instance.componentDidMount();
  //     clock.tick(2000);

  //     expect(updateStateStub.callCount).toEqual(2); // gets called twice in 2 seconds
  //   });

  //   it("update the state on componentDidMount call", () => {
  //     const wrapper = shallow(<Grid />);
  //     const clock = sinon.useFakeTimers();
  //     const instance = wrapper.instance();

  //     expect(instance.state.data.length).toEqual(0);

  //     instance.componentDidMount();
  //     clock.tick(2000);

  //     expect(instance.state.data.length).toEqual(6);
  //   });
  // });
});
