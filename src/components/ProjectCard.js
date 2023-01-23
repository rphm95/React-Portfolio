import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({title, description, imgUrl, link }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img className="project-img" src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                     <Button variant="dark" id="btn"><a href={link}>DEMO</a></Button>
                </div>
            </div>
        </Col>
    )
}