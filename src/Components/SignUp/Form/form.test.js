import { shallow } from 'enzyme';
import Form from '.';
import Input from './input';
import React from 'react';
import { isEmailCorrect }  from './utils';

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe("Form", () => {
    const setState = jest.fn();

    const useStateMock = (initState) => [initState, setState];

    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should render h1", () => {
        const formWrapper = shallow(<Form />);

        expect(formWrapper.find("h1").length).toEqual(1);
    });

    it("should render input", () => {
        const formWrapper = shallow(<Form />);

        expect(formWrapper.find(Input).length).toEqual(4);
    });

    it("should call useState few 8 times", () => {
        jest.spyOn(React, "useState").mockImplementation(useStateMock);
        const formWrapper = shallow(<Form />);
        const inputs = formWrapper.find(Input);
        inputs.forEach(input => {
            input.simulate("change", { target: { value: "test@test.test" } });
        });
        expect(setState).toHaveBeenCalledTimes(8);
    });

    it("should redirect to connection page", () => {
        jest.spyOn(React, "useState").mockImplementation(useStateMock);
        const formWrapper = shallow(<Form />);
        const button = formWrapper.find(".form-changeView");

        button.simulate("click");

        expect(mockHistoryPush).toHaveBeenCalledWith("/connexion");
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