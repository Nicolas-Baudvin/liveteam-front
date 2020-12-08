import React from 'react';
import { mount, shallow } from 'enzyme';
import Signup from '.';
import Form from '../Form';
import { Input } from '../StyledComponents';
import { isEmailCorrect } from './utils';

describe("<Signup />", () => {
    const setState = jest.fn();

    const useStateMock = (initState) => [initState, setState];

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render finely", () => {
        const wrapper = shallow(<Signup />);
        expect(wrapper.find(".signup").length).toEqual(1);
    });

    it("should render the img", () => {
        const wrapper = shallow(<Signup />);
        expect(wrapper.find("img").length).toEqual(1);
    });

    it("should have a correct src & alt", () => {
        const wrapper = shallow(<Signup />);
        const img = wrapper.find("img");

        expect(img.props().src).toEqual(`${process.env.PUBLIC_URL}/img/signupsvg.png`);
        expect(img.props().alt).toBeTruthy();
    });

    it("should render the form component", () => {
        const wrapper = shallow(<Signup />);
        expect(wrapper.find(Form).length).toEqual(1);
    });

    it("should call useState 8 times", () => {
        jest.spyOn(React, "useState").mockImplementation(useStateMock);
        const formWrapper = mount(<Signup />); // note mount for children rendering.
        const inputs = formWrapper.find(Input);
        inputs.forEach(input => {
            input.simulate("change", { target: { value: "test@test.test" } });
        });
        expect(setState).toHaveBeenCalledTimes(8);
    });

    /**
     * Utils
     */

    it("should return false email", () => {
        expect(isEmailCorrect("string")).toEqual(false);
    });

    it("should return true email", () => {
        expect(isEmailCorrect("test@test.test")).toEqual(true);
    })
});