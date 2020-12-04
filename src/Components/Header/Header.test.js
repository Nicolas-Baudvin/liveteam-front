import { shallow } from 'enzyme';
import Header from '.'

describe("Header Component", () => {
    it ("header renders correctly", () => {
        const headerWrapper = shallow(<Header />);
        expect(headerWrapper.find(".header").length).toEqual(1)
    });
});