import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import headerImg2 from '../assets/img/blob.svg';
import project1 from '../assets/img/project-1.png';
import project2 from '../assets/img/project-2.png';
import project3 from '../assets/img/project3.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); //indicates index to each word displayed
    const [isDeleting, setIsDeleting] = useState(false); //the word is being typed or deleted
    const toRotate = ["Software Engineer", "Full Stack Developer", "Brazilian", "Travel Enthusiast"] //this is the loop for the carousel of words.
    const [text, setText] = useState('') //component needs to know each text is being displayed
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100) //to determine how fast the other letter comes after the other one is typed.
    const period = 1000; //time for each word

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) };
    },[text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period); 
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center" id="row">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => // this is comming from npm animate https://animate.style/ 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi! I'm Rafaela, `}<span className="wrap">{text}</span></h1>
                                <p></p>
                                {/* <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button> */}
                            </div>}
                        </TrackVisibility>  
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img className="HI" src={project3} alt="Header Img"/>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}