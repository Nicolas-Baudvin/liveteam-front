import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import Signup from '../SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Login from '../Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/inscription">
            <Signup />
          </Route>
          <Route exact path="/connexion"> 
            <Login />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
