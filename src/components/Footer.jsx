import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Container fluid className="bg-dark">
        <Row className="text-center text-light">
          <Col md={10} className="mx-auto mt-4 p-3 h3 fw-bold">
            Social Media Presence
          </Col>
          <Col xs={6} md={6} lg={6} className="mx-auto mb-4">
            <Row className="text-center text-light fw-bold">
              <Col>
                <a href="https://github.com/akshay094" className="text-light fw-bold text-decoration-none">Github</a>
              </Col>
              <Col>
                <a href="https://www.linkedin.com/in/akshay-kanojia-2a019bb3/" className="text-light fw-bold text-decoration-none">LinkedIn</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
