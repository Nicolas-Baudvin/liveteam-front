import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
