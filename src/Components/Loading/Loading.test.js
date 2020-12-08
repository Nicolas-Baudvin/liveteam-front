import { shallow } from 'enzyme';
import Loading from '.';

describe("Loading component", () => {
    it("should render the component", () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper.find(".loading").length).toEqual(1);
    });

    it("should render imgs", () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper.find("img").length).toEqual(2);
    })
});