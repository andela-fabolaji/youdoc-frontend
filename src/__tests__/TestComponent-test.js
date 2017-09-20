import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import TestComponent from '../TestComponent';

test('TestComponent', () => {
  const testComp = shallow(
    <TestComponent labelOn="on" labelOff="off"/>
  );

  expect(testComp.text()).toEqual('off');
  testComp.find('input').simulate('change');
  expect(testComp.text()).toEqual('on');
  console.log(testComp.state());
});
