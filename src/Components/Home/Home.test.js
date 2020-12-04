import { shallow } from 'enzyme';
import Home from '.';
import Header from '../Header';
import Main from './Main';
import Footer from '../Footer';

describe("Home", () => {
    it("renders Home correctly", () => {
        const homeWrapper = shallow(<Home />);
        expect(homeWrapper.find(".home").length).toEqual(1)
    });

    it("renders header", () => {
        const homeWrapper = shallow(<Home />);
        expect(homeWrapper.find(Header).length).toEqual(1);
    });

    it("renders Main Component", () => {
        const homeWrapper = shallow(<Home />);
        expect(homeWrapper.find(Main).length).toEqual(1);
    });

    it("renders Footer Component", () => {
        const homeWrapper = shallow(<Home />);
        expect(homeWrapper.find(Footer).length).toEqual(1);
    });
});
