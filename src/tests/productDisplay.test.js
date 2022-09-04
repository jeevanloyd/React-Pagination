import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProductsDisplay from '../components/ProductsDisplay';

const productData = {
    Data: [
        {
            id: 1,
            price: "$87.68",
            product_name: "Amitriptyline Hydrochloride",
            description: "synergize efficient metrics",
            product_image: "",
        },
    ]
}
jest.mock('../components/ProductsDisplay', () => () => 'ProductsDisplay');

test('should test ProductsDisplay component', () => {

    const component = renderer.create(
        <ProductsDisplay props={productData} />,
    );
    let ProductDisplayTree = component.toJSON();
    expect(ProductDisplayTree).toMatchSnapshot();

});
