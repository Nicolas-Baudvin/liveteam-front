import { mount, shallow } from 'enzyme';
import React from 'react';
import Login from '.';
import Form from '../Form';
import { Input } from '../StyledComponents';

describe("<Login />", () => {
    const setState = jest.fn();

    const useStateMock = (initState) => [initState, setState];

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render login component", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(".login").length).toEqual(1);
    });

    it("should render img", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find("img").length).toEqual(1);
    });

    it("should have a correct src & alt", () => {
        const wrapper = shallow(<Login />);
        const img = wrapper.find("img");

        expect(img.props().src).toEqual(`${process.env.PUBLIC_URL}/img/login.png`);
        expect(img.props().alt).toBeTruthy();
    });

    it("should render the form component", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Form).length).toEqual(1);
    });

    it("should call useState 2 times", () => {
        jest.spyOn(React, "useState").mockImplementation(useStateMock);
        const formWrapper = mount(<Login />); // note mount for children rendering.
        const inputs = formWrapper.find(Input);
        inputs.forEach(input => {
            input.simulate("change", { target: { value: "test_test" } });
        });
        expect(setState).toHaveBeenCalledTimes(2);
    });

});