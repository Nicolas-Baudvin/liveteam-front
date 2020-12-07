import React from 'react';
import { shallow } from 'enzyme';
import Signup from '.';
import Form from './Form';

describe("<Signup />", () => {
    const wrapper = shallow(<Signup />);
    it("should render finely", () => {
        expect(wrapper.find(".signup").length).toEqual(1);
    });

    it("should render the img", () => {
        expect(wrapper.find("img").length).toEqual(1);
    });

    it("should have a correct src & alt", () => {
        const img = wrapper.find("img");

        expect(img.props().src).toEqual(`${process.env.PUBLIC_URL}/img/signupsvg.png`);
        expect(img.props().alt).toBeTruthy();
    });

    it("should render the form component", () => {
        expect(wrapper.find(Form).length).toEqual(1);
    });
});