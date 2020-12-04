import { shallow } from 'enzyme';
import Main from '.';

describe("Main Component", () => {
    it ("should renders correctly", () => {
        const mainWrapper = shallow(<Main />);
        expect(mainWrapper.find(".home-main").length).toEqual(1);
    });
});