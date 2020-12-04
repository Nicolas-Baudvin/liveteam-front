import { shallow } from 'enzyme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '.';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';

describe("App", () => {
    it("App renders correctly", () => {
        const appWrapper = shallow(<App />);
        expect(appWrapper.find(".App").length).toEqual(1);
    });

    it("renders Header Component", () => {
        const homeWrapper = shallow(<App />);
        expect(homeWrapper.find(Header).length).toEqual(1);
    });

    it("renders Footer Component", () => {
        const homeWrapper = shallow(<App />);
        expect(homeWrapper.find(Footer).length).toEqual(1);
    });

    it("renders Home Component", () => {
        const appWrapper = shallow(<App />);
        expect(appWrapper.contains(<Home />)).toEqual(true);
    });

    it("renders Router Component", () => {
        const appWrapper = shallow(<App />);
        expect(appWrapper.find(BrowserRouter).length).toEqual(1);
    });

    it("renders Switch Component", () => {
        const appWrapper = shallow(<App />);
        expect(appWrapper.find(Switch).length).toEqual(1);
    });

    it("renders Route Component", () => {
        const appWrapper = shallow(<App />);
        expect(appWrapper.find(Route).length).toEqual(1)
    });

    it("Route props are exact && path='/'", () => {
        const appWrapper = shallow(<App />);
        const route = appWrapper.find(Route);   
        expect(route.props().exact).toEqual(true);
        expect(route.props().path).toEqual("/");
    });
});