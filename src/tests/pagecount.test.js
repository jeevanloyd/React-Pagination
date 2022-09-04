import React from 'react';
import { shallow } from 'enzyme';
import PageCount from '../components/PageCount';


test('should test Header component', () => {
    const wrapper = shallow(<PageCount />);
    expect(wrapper).toMatchSnapshot();
});