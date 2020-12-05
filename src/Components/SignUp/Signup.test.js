import { shallow } from 'enzyme';
import Signup from '.';

describe("<Signup />", () => {
    it("should render finely", () => {
        const wrapper = shallow(<Signup />);
        expect(wrapper.find(".signup").length).toEqual(1);
    });
});