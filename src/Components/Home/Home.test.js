import { shallow } from 'enzyme';
import Home from '.';
import Main from './Main';

describe("Home", () => {
    it("renders Home correctly", () => {
        const homeWrapper = shallow(<Home />);
        expect(homeWrapper.find(".home").length).toEqual(1)
    });

    it("renders Main Component", () => {
        const homeWrapper = shallow(<Home />);
        expect(homeWrapper.find(Main).length).toEqual(1);
    });
});
