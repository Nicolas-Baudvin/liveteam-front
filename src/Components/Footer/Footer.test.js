import { shallow } from "enzyme";
import Footer from '.';
import { iconNavItems } from './utils';

describe("Footer Component", () => {
    it("renders Footer correctly", () => {
        const footerWrapper = shallow(<Footer />);
        expect(footerWrapper.find(".footer").length).toEqual(1);
    });

    it("should have length of 3 with 2 props each (icon nav)", () => {
        expect(iconNavItems.length).toEqual(3);
        for (let i = 0; i < iconNavItems.length; i++) {
            const element = iconNavItems[i];
            expect(Object.entries(element).length).toEqual(2);
        }
    });

    it("should render the nav with 3 icons items", () => {
        const footerWrapper = shallow(<Footer />);
        expect(footerWrapper.find('.footer-nav__item--icons').length).toEqual(3);
    });

    it("should have length of 3 with 2 props each (text nav)", () => {
        
    });
});