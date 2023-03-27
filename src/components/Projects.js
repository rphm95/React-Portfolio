import { Container, Tab, Col, Nav, Row } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/worldtravel.png';
import projImg2 from '../assets/img/lovestruck.png';
import projImg3 from '../assets/img/portfolio.png';
import projImg4 from '../assets/img/bookclub.png';
import projImg5 from '../assets/img/laboutique.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "World Travel",
            description:"Full Stack web app created with Node.js, Express connected to MongoDb.",
            imgUrl: projImg1,
            link: "https://nameless-plains-06717.herokuapp.com/",
            code: "https://github.com/rphm95/project2"
        },
        {
            title: "La Boutique",
            description:"Developed in collaboration with a partner using Node.js, Express.js, React, MongoDB and BootStrap.",
            imgUrl: projImg5,
            link: "https://powerful-sierra-23754.herokuapp.com/",
            code: "https://github.com/rphm95/project3BackEnd"
        },
        {
            title: "Welcome Aboard",
            description:"Developed with JQuery, Html, CSS and JavaScript.",
            imgUrl: projImg3,
            link: "https://rphm95.github.io/Portfolio/",
            code: "https://github.com/rphm95/Portfolio"
        },
        {
            title: "LoveStruck",
            description:"Full Stack web app developed in collaboration with a partner, using Python, Django, PostgreSQL and React.",
            imgUrl: projImg2,
            link: "https://singular-druid-6c25ce.netlify.app/",
            code: "https://github.com/evrouge/dating-app-backend"
        },
        {
            title: "BookClub",
            description:"Full Stack web app developed using Java, Spring, PostgreSQL and React.",
            imgUrl: projImg4,
            link: "https://velvety-kelpie-5e2788.netlify.app/",
            code: "https://github.com/rphm95/BookClub-backend"
        }
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                <Col size={12}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2>My Projects</h2>
                        <p></p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav> */}
                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                    projects.map((project, index) => {
                                        return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                                </Tab.Pane>
                                
                                <Tab.Pane eventKey="second">
                                    <p>More Projects to come...</p>
                                </Tab.Pane>
                                
                                <Tab.Pane eventKey="third">
                                    <p>Loading...</p>
                                </Tab.Pane>
                            
                            </Tab.Content>
                        </Tab.Container>
                    </div>}
                    </TrackVisibility>
                </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )
}