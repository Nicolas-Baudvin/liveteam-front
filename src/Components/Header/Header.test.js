import { shallow } from 'enzyme';
import Header from '.'
import Logo from './Logo';
import Nav from './Nav';
import { navItemsArray } from './utils';

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe("Header Component and Childrens", () => {
    const headerWrapper = shallow(<Header />);
    it("header renders correctly", () => {
        expect(headerWrapper.find(".header").length).toEqual(1)
    });

    /**
     *  children - <Logo />
     */
    it("render Logo Component", () => {
        expect(headerWrapper.find(Logo).length).toEqual(1);
    });

    it("Logo has an <img> tag with appropriate src and alt props", () => {
        const logoWrapper = shallow(<Logo />);
        expect(logoWrapper.children().props().src).toEqual("/img/logo.png");
        expect(logoWrapper.children().props().alt).toEqual("LiveTeam");
    });

    it("should call onClick func", () => {
        const logoWrapper = shallow(<Logo />);
        logoWrapper.simulate("click");

        expect(mockHistoryPush).toHaveBeenCalledWith("/");
    });

    /**
     *  children - <Nav />
     */
    it("renders Nav Component", () => {
        expect(headerWrapper.find(Nav).length).toEqual(1);
    });

    it("should have a header-nav class", () => {
        const navWrapper = shallow(<Nav history={{ push: jest.fn(), location: "/" }} nav={navItemsArray} />);
        expect(navWrapper.find(".header-nav").length).toEqual(1);
    });

    it("navItems array should have 4 items with 3 props for each items", () => {
        expect(navItemsArray.length).toEqual(4);
        for (let i = 0; i < navItemsArray.length; i++)
        {
            const element = navItemsArray[i];
            expect(Object.entries(element).length).toEqual(3);
        }
    })

    it("should have 4 <li> items", () => {
        const navWrapper = shallow(<Nav history={{ push: jest.fn(), location: "/" }} nav={navItemsArray} />);
        expect(navWrapper.find(".header-nav__item").length).toEqual(4);
    });

    it("should render with text", () => {
        const navWrapper = shallow(<Nav history={{ push: jest.fn(), location: "/" }} nav={navItemsArray} />);
        const navItems = navWrapper.find(".header-nav__item");
        navItems.forEach((item, i) => {
            expect(item.text()).toEqual(navItemsArray[i].title)
        });
    });

    it("should call func on click on each nav item", () => {
        const funcToCall = jest.fn();
        const navWrapper = shallow(<Nav history={{ push: jest.fn(), location: "/" }} onClick={funcToCall} nav={navItemsArray} />);
        const navItems = navWrapper.find(".header-nav__item");
        navItems.forEach((item, i) => {
            item.simulate("click");
            expect(mockHistoryPush).toHaveBeenCalledWith(navItemsArray[i].path);
        });
    });
});