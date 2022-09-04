import React from 'react';
import { shallow } from 'enzyme';
import HeaderComponent from '../components/HeaderComponent';

test('should test Header component', () => {
 const wrapper = shallow(<HeaderComponent />);
 expect(wrapper).toMatchSnapshot();
});