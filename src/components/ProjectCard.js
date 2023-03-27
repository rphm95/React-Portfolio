import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

export const ProjectCard = ({title, description, imgUrl, link, code }) => {
    return (
        <Col size={12} sm={4} md={6}>
            <div className="proj-imgbx">
                <img className="project-img" src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <Container id="btn">
                        <Button variant="dark" id="btncard"><a href={link}>Demo</a></Button>
                        <Button variant="dark" id="btncard"><a href={code}>Code</a></Button>
                    </Container>
                </div>
            </div>
        </Col>
    )
}