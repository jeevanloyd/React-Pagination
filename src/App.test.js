
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import HeaderComponent from './components/HeaderComponent';
import PageCount from './components/PageCount';
import ProductsDisplay from './components/ProductsDisplay';
import MainComponent from './components/MainComponent';
jest.mock('./components/ProductsDisplay', () => () => 'ProductsDisplay');
jest.mock('./components/MainComponent', () => () => 'MainComponent');

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

describe('Render Pagecount Component', () => {
  it('snapshot testing for Pagecount component', () => {
    const component = renderer.create(
      <PageCount />,
    );
    let PagecountTree = component.toJSON();
    expect(PagecountTree).toMatchSnapshot();
  })
})

describe('Render Product Display Component', () => {
  let productData={
    Data: [
      {
          id: 1,
          price: "$87.68",
          product_name: "Amitriptyline Hydrochloride",
          description: "synergize efficient metrics",
          product_image: "http://dummyimage.com/307x328.bmp/ff4444/ffffff"
      },
    ]
  }
  it('snapshot testing for Product Display component', () => {
    const component = renderer.create(
      <ProductsDisplay props={productData}/>,
    );
    let ProductDisplayTree = component.toJSON();
    expect(ProductDisplayTree).toMatchSnapshot();
  })
})


describe('Render Main Component', () => {
  let productData={
    Data: [
      {
          id: 1,
          price: "$87.68",
          product_name: "Amitriptyline Hydrochloride",
          description: "synergize efficient metrics",
          product_image: "http://dummyimage.com/307x328.bmp/ff4444/ffffff"
      },
      {
        id: 2,
        price: "$58.53",
        product_name: "Zicam",
        description: "repurpose world-class metrics",
        product_image: "http://dummyimage.com/345x342.jpg/dddddd/000000"
    },
    ]
  }
  it('snapshot testing for main component', () => {
    const component = renderer.create(
      <MainComponent props={productData}/>,
    );
    let ProductDisplayTree = component.toJSON();
    expect(ProductDisplayTree).toMatchSnapshot();
  })
})





