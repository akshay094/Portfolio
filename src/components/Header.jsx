import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './Header.css'
import Home from './Home'
import Projects from './Projects'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Header = () => {
  return (
    <Router>
      <Navbar bg="primary">
        <Container>
          <Nav.Link as={Link} className="text-decoration-none h3 text-light fw-bold active" to="/">Home</Nav.Link>
          <Nav.Link as={Link} className="text-decoration-none h3 fw-bold text-light" to="/projects">Projects</Nav.Link>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  )
}

export default Header
