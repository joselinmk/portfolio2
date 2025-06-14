
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";

export const Contact = () => {
  const [status, setStatus] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "871dda7e-e1db-4eec-ab13-e288ecdfa086");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setStatus("Message sent successfully! ");
      event.target.reset(); // Reset input fields
      setTimeout(() => {
        setStatus("");
      }, 3000);
    } else {
      setStatus("Something went wrong, please try again. ");
    }
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={onSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="name" placeholder="Name" />
                    </Col>
                    
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" placeholder="Email Address" />
                    </Col>
                  
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="email"  placeholder="Message" ></textarea>
                      <button   type="submit"><span>Send</span></button>
                    </Col>
                    {status && <p style={{ marginTop: "10px", color: "green" }}>{status}</p>}
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


