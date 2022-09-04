
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import HeaderComponent from './components/HeaderComponent';


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
configure({ adapter: new Adapter() });


// Note: running cleanup afterEach is done automatically and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Render Header Component', () => {
  it('snapshot testing for Header component', () => {
    const component = renderer.create(
      <HeaderComponent />,
    );
    let Headertree = component.toJSON();
    expect(Headertree).toMatchSnapshot();
  })
})







