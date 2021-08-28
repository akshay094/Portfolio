import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ReactComponent as LinkedIn } from "../assets/images/linkedin.svg"
import { ReactComponent as GitHub } from "../assets/images/github.svg"
import { ReactComponent as Discord } from "../assets/images/discord.svg"
import { Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Container fluid className="bg-dark">
        <Row className="text-center text-light">
          <Col md={10} className="mx-auto mt-4 p-3 h3 fw-bold">
            Wanna Connect ?
          </Col>
          <Col xs={4} md={4} lg={4} className="mx-auto mb-4">
            <Row className="text-center text-light fw-bold">
              <Col xs={12} md={12} lg={12} >
                <a href="https://discord.gg/AabR3qvJZd" className="text-light fw-bold text-decoration-none mx-3"><Discord className="m-2" /></a>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <a href="https://github.com/akshay094" className="text-light fw-bold text-decoration-none mx-3"><GitHub className="img-fluid m-2" /></a>

                <a href="https://www.linkedin.com/in/akshay-kanojia-2a019bb3/" className="text-light fw-bold text-decoration-none mx-3"><LinkedIn className="img-fluid m-2" /></a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
