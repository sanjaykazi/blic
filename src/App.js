import logo from './logo.svg';
import Banner from './components/Banner/Banner';
import MediaQuery from 'react-responsive'
import './App.css';
import Content from './components/Content/Content';
import Fullscreen from './components/Fullscreen/Fullscreen'
import Mobilescreen from './components/Mobilescreen/Mobilescreen'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path='/will-creator-tool'>
            <header className="App-header">
              <Banner />
              <h1 id='will-generator'>Will Creator</h1>
              <Content />
            </header>
          </Route>
          <Route path={["/will-creator", "/"]}>
            <MediaQuery maxWidth={1980}>
              <Fullscreen />
            </MediaQuery>
            <MediaQuery maxWidth={1000}>
              <Mobilescreen />
            </MediaQuery>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
