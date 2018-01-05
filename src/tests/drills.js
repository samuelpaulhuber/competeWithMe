import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import {expect} from 'chai';
import Drills from '../components/drills';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });
describe('<Drills/>', function () {
  it('test image', function () {
    const wrapper = shallow(<Drills/>);
    expect(wrapper.find('img')).to.have.length(1);
  });

  // it('should have props for email and src', function () {
  //   const wrapper = shallow(<Avatar/>);
  //   expect(wrapper.props().email).to.be.defined;
  //   expect(wrapper.props().src).to.be.defined;
  // });
});