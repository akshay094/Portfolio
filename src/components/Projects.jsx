import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <>
      <Container className="mt-5 pt-5">
        <Row className="m-3 text-center justify-content-center">
          <Col x={12} md={12} center>
            <h1>All My Projects</h1>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 pt-5 mb-5 pb-5">
        <hr />
        <Row>
          <ProjectCard heading="NetflixClone App" date="June 2021" desc="A movie streaming frontend made using react. Data being fetched from a TMDB movie API." link="https://netflix-clone-f0684.web.app/" source="https://github.com/akshay094/NetflixApp" disabled={false} />

          <ProjectCard heading="CovidTracker App" date="August 2021" desc="A web app that gives the information on world wide covid-19 case count.Gives the data on all countries total case count in tabular form" link="https://covidtracker-ak.netlify.app/" source="https://github.com/akshay094/CovidTracker" disabled={false} />

          <ProjectCard heading="ChuckNorris Jokes" date="June 2021" desc="Just a fun little page made in react using the chuck norris jokes API.Select a category & based on that it will render jokes." link="https://gracious-wright-9e4b72.netlify.app/" source="https://github.com/akshay094/Chucknorris" disabled={false} />


          <ProjectCard heading="News App" date="June 2021" desc="This is a news app that fetches data from a backend api newsdata.io & renders it on cards.NOTE:- Now since this is a free API the live site will not render any data , you can download the code locally & render data on your local machine." link="https://news-ak.netlify.app/" source="https://github.com/akshay094/NewsApp" disabled={false} />

          <ProjectCard heading="Binary Calculator" date="May 2021" desc="Made using Html ,CSS & JavaScript only.You can perform the binary number calculations such as add/multiply/divide/subtract on this app.You can check the console for corresponding decimal representation of the binary number." link="https://binarycalculator.herokuapp.com" source="https://github.com/akshay094/BinaryCalculator" disabled={false} />

          <ProjectCard heading="Ecomm Add to cart" date="June 2021" desc="This is a ecommerce shopping site page that shows the implementation of add to cart functionality . All the data rendered on page is being fetched from a database table made using postgresql.The rows in table are manipualted using django ORM." link="#" source="https://github.com/akshay094/Django-eComm" disabled={true} />

          <ProjectCard heading="Node API" date="May 2021" desc="Built a restful API using NodeJs , MongoDB , ExpressJS & mongoose ODM.The API collects students data, complete implemetation of CRUD operations on the mongoDB client collection using mongoose." link="#" source="https://github.com/akshay094/NodeApi" disabled={true} />
        </Row>
      </Container>
    </>
  )
}

export default Projects
