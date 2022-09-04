
import renderer from 'react-test-renderer';
import HeaderComponent from './component/HeaderComponent';






describe('Render Search Component', () => {

  it('snapshot testing for Search component', () => {
    const component = renderer.create(
      <HeaderComponent />,
    );
    let Searchtree = component.toJSON();
    expect(Searchtree).toMatchSnapshot();
  })
})





