import MainComponent from '../components/MainComponent';
import renderer from 'react-test-renderer';
jest.mock('../components/MainComponent', () => () => 'MainComponent');

describe('Render Main Component', () => {
    let productData = {
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
            <MainComponent props={productData} />,
        );
        let ProductDisplayTree = component.toJSON();
        expect(ProductDisplayTree).toMatchSnapshot();
    })

})

