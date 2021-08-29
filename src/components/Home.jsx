import { Button } from 'react-bootstrap'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReactComponent as Img } from "../assets/images/home-img.svg"
const Home = () => {
  return (
    <div className="my-5">
      <Container>
        <Row className="text-center justify-content-center">
          <Col xs={12} md={12} center>
            <Img className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={8} xs={8} md={8} className="text-capitalize display-6
           fw-bold text-center">
            <span className="text-muted">Akshay Kanojia ,</span>  <br />
            <span>Web Developer</span>
          </Col>
        </Row>
        <Row className="my-5 justify-content-center text-center">
          <Col lg={8} xs={8} md={8} className="my-3">
            <span className="text-capitalize fw-bold text-primary h3">Technologies & Skills</span>
          </Col>
          <Col lg={10} xs={10} md={10}>
            <span>I am familiar with Html , CSS , JavaScript , Core Java , C/C++ , Python , Django , NodeJS , ReactJS & MySQL</span>
          </Col>
        </Row>
        <Row className="my-5 justify-content-center text-center">
          <Col lg={8} xs={8} md={8} className="my-3">
            <span className="m-3 text-primary text-capitalize fw-bold h3">Projects</span>
          </Col>
          <Col lg={10} xs={10} md={10}>
            <span>I like to showcase my work , thus you can see some of my projects online</span>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col md={4} xs={4} lg={4}>
            <Button className="btn btn-dark"><Link to="/projects" className="text-light fw-bold text-decoration-none">See Projects</Link></Button>
          </Col>
        </Row>

        <Row className="my-5 justify-content-center text-center">
          <Col lg={8} xs={8} md={8} className="my-3">
            <span className="m-3 text-primary text-capitalize fw-bold h3">My Interests</span>
          </Col>
          <Col lg={10} xs={10} md={10}>
            <span>I am an avid coder , I enjoy learning new technologies & frameworks , most of the time I invest in making projects on the technologies I have learned. I also like to work on improving my coding skills hence, I spend a lot of time on competitive sites like hackerrank , leetcode. <br /><span><i className="fw-bold">You can checkout my hackerrank profile <a href="https://www.hackerrank.com/akanojia_47">here</a> </i></span></span>
          </Col>
        </Row>

        <Row className="my-5 justify-content-center text-center">
          <Col lg={8} xs={8} md={8} className="my-3">
            <span className="m-3 text-primary text-capitalize fw-bold h3">Certifications  /<br />Achievements</span>
          </Col>
          <Col lg={10} xs={10} md={10} className="mx-auto">
            <span>
              Achieved 5 stars in Multiple Hackerrank modules -&gt; <br /><br /><i><b>Problem Solving , Python , C++ , 10 Days of JS , SQL</b></i>
            </span>
            <hr />
            <span>
              Cleared the hackerrank verified skill assessment tests for -&gt; <br /><br />
              <i><b>Python(Core) , Java(Core) , CSS , SQL , JavaScript(Intermediate)</b></i>
            </span>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Home
