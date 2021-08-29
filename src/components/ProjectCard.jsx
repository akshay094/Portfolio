import React from 'react'
import { Col, Container, Row, Button, Form } from 'react-bootstrap'

const ProjectCard = ({ heading, date, desc, link, source, disabled }) => {
  return (
    <>
      <hr />
      <Container className="mt-5 pt-4 mb-5 pb-4">
        <Row className="text-center justify-content-center">
          <Col x={12} md={12} center>
            <h2>{heading}</h2>
            <h6 className="py-3">{date}</h6>
            <h5>{desc}</h5>
          </Col>
        </Row>
        <Row className="text-center">
          <Col >
            <Form action={link} className="d-inline">
              <Button type="submit" className={disabled ? " disabled my-4 mx-2 fw-bold text-light" : "my-4 mx-2 fw-bold text-light"}
                variant="primary">
                Live Project
              </Button>
            </Form>
            <Form action={source} className="d-inline">
              <Button type="submit" className="fw-bold text-light my-4 mx-2" value=""
                variant="danger">
                Source Code
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProjectCard
