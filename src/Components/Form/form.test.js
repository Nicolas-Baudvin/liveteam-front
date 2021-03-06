import { shallow } from 'enzyme';
import Form from '.';
import Input from './input';
import React from 'react';

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe("Form", () => {
    const handleSubmit = jest.fn();
    const onChangeHandlers = {
        email: jest.fn(),
        username: jest.fn(),
        password: jest.fn(),
        confPass: jest.fn()
    };

    const mockInitState = {
        username: "",
        password: "",
        email: "",
        confPass: "",
    };

    it("should render h1", () => {
        const formWrapper = shallow(<Form
            type="signup"
            state={mockInitState}
            errors={mockInitState}
            handleSubmit={handleSubmit}
            onChangeHandlers={onChangeHandlers}
        />);

        expect(formWrapper.find("h1").length).toEqual(1);
    });


    /**
     * Signup Form
     */
    it("should render 4 inputs for signup form", () => {
        const type = "signup";

        const formWrapper = shallow(<Form
            type={type}
            state={mockInitState}
            errors={mockInitState}
            handleSubmit={handleSubmit}
            onChangeHandlers={onChangeHandlers}
        />);

        expect(formWrapper.find(Input).length).toEqual(4);
    });

    it("should redirect to connection page", () => {
        const formWrapper = shallow(<Form
            type="signup"
            state={mockInitState}
            errors={mockInitState}
            handleSubmit={handleSubmit}
            onChangeHandlers={onChangeHandlers}
        />);
        const button = formWrapper.find(".form-changeView");

        button.simulate("click");

        expect(mockHistoryPush).toHaveBeenCalledWith("/connexion");
    });

    it("should call handleSubmit func", () => {
        const wrapper = shallow(<Form
            type="signup"
            state={mockInitState}
            errors={mockInitState}
            handleSubmit={handleSubmit}
            onChangeHandlers={onChangeHandlers}
        />);

        const form = wrapper.find("form");

        form.simulate("submit", { preventDefault: () => { } });

        expect(handleSubmit).toHaveBeenCalled();
    });

    /**
     * Login Form
     */
    it("should render 2 inputs for login form", () => {
        const type = "login";

        const formWrapper = shallow(<Form
            type={type}
            state={mockInitState}
            errors={mockInitState}
            handleSubmit={handleSubmit}
            onChangeHandlers={onChangeHandlers}
        />);

        expect(formWrapper.find(Input).length).toEqual(2);
    });

    it("should call handleSubmit func for login form", () => {
        const wrapper = shallow(<Form
            type="login"
            state={mockInitState}
            errors={mockInitState}
            handleSubmit={handleSubmit}
            onChangeHandlers={onChangeHandlers}
        />);

        const form = wrapper.find("form");

        form.simulate("submit", { preventDefault: () => { } });

        expect(handleSubmit).toHaveBeenCalled();
    });

    it("should redirect to signup page", () => {
        const formWrapper = shallow(<Form
            type="login"
            state={mockInitState}
            errors={mockInitState}
            handleSubmit={handleSubmit}
            onChangeHandlers={onChangeHandlers}
        />);
        const button = formWrapper.find(".form-changeView");
        button.simulate("click");
        expect(mockHistoryPush).toHaveBeenCalledWith("/inscription");
    });
});