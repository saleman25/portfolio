import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import './App.css';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={Aboutme} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/freelance" component={Freelance} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
