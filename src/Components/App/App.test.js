import { shallow } from 'enzyme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '.';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import Signup from '../SignUp';
import Login from '../Login';

describe("App", () => {
    const appWrapper = shallow(<App />);
    it("App renders correctly", () => {
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
        expect(appWrapper.contains(<Home />)).toEqual(true);
    });

    it("should render the Signup Component", () => {
        expect(appWrapper.find(Signup).length).toEqual(1)
    });

    it("shoudl render the Login component", () => {
        expect(appWrapper.find(Login).length).toEqual(1);
    });

    it("renders Router Component", () => {
        expect(appWrapper.find(BrowserRouter).length).toEqual(1);
    });

    it("renders Switch Component", () => {
        expect(appWrapper.find(Switch).length).toEqual(1);
    });

    it("renders Route Component", () => {
        expect(appWrapper.find(Route).length).toEqual(3)
    });

    it("Route props have good path & exact props", () => {
        const routesProps = [
            {
                exact: true,
                path: "/"
            },
            {
                exact: true,
                path: "/inscription"
            },
            {
                exact: true,
                path: "/connexion"
            }
        ];

        const routes = appWrapper.find(Route);  
        routes.forEach((route, i) => {
            expect(route.props().exact).toEqual(routesProps[i].exact);
            expect(route.props().path).toEqual(routesProps[i].path);
        })
    });
});