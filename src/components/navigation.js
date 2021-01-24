import React from "react";
import ReactDOM from 'react-dom';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home';
import Teaching from './teaching';
import Research from './research';
import Resources from './resources';
import Contact from './contact';

import PageNoteFound from './page-not-found';

class Clickable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    handleClick = () => this.props.onClick(this.props.index);
    render() {
      return (
        <li className="nav-item">
            <Link to={this.props.to} className={this.props.isActive ? "nav-link active":"nav-link"}
            onClick={ this.handleClick }> {this.props.name} </Link>
        </li>
      );
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_text: ['Home', 'Teaching', 'Research', 'Resources', 'Contact'],
            //nav_urls:['index', 'teaching.html', 'research.html', 'resources.html', 'contact.html'],
            activeIndex: 0 //current navigation id
        };
    }
    
    handleClick = (index) => this.setState({ activeIndex: index });

    render() {
        return (
          <Router>
            <nav className="navbar sticky-top navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="index.html">&nbsp;</a>
                <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {
                          this.state.nav_text.map( (value, i) =>
                          <Clickable name={value} to={value.toLocaleLowerCase()} index={i} 
                          isActive={this.state.activeIndex === i}
                          onClick={ this.handleClick } 
                          />)
                        }
                    </ul>
                </div>
            </nav>
          
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/index">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/teaching">
                <Teaching />
              </Route>
              <Route exact path="/research">
                <Research />
              </Route>
              <Route exact path="/resources">
                <Resources />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route path="*">
                <PageNoteFound />
              </Route>
            </Switch>
          </Router>
        );
    }
}

export default Navbar;

ReactDOM.render(
  <Navbar />,
  document.getElementById("navbar")
);
