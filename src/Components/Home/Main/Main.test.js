import { shallow } from 'enzyme';
import Main from '.';
import { Button } from '../../StyledComponents';

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe("Main Component", () => {
    const mainWrapper = shallow(<Main onClick={mockHistoryPush} />);

    it ("should render correctly", () => {
        expect(mainWrapper.find(".home-main").length).toEqual(1);
    });

    /**
     * <img />
     */
    it("should render the svg", () => {
        expect(mainWrapper.find(".home-main__pic").length).toEqual(1);
    });

    it("should have a correct src", () => {
        const srcProp = mainWrapper.find(".home-main__pic").props().src;
        expect(srcProp).toEqual("/img/homepic.png");
    });


    /**
     * Home page text
     */
    it("should render the home page text", () => {
        expect(mainWrapper.find(".home-main__text").length).toEqual(1);
    });

    it("should render the button", () => {
        expect(mainWrapper.find(Button).length).toEqual(1)
    });

    it("should call onClick func with new history", () => {
        const button = mainWrapper.find(Button);
        button.simulate("click");
        expect(mockHistoryPush).toHaveBeenCalledWith("/inscription");
    });
});