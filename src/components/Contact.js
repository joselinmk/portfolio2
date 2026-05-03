
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";

export const Contact = () => {
  const [status, setStatus] = useState({ message: "", isError: false });

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ message: "Sending...", isError: false });

    const formData = new FormData(event.target);

    formData.append("access_key", "871dda7e-e1db-4eec-ab13-e288ecdfa086");
    formData.append("subject", "New Portfolio Contact Message");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setStatus({ message: "Message sent successfully!", isError: false });
        event.target.reset();
        setTimeout(() => {
          setStatus({ message: "", isError: false });
        }, 3000);
      } else {
        setStatus({
          message: res.message || "Something went wrong, please try again.",
          isError: true
        });
      }
    } catch (error) {
      setStatus({
        message: "Network error. Please try again later.",
        isError: true
      });
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
                      <input type="text" name="name" placeholder="Name" required />
                    </Col>
                    
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" placeholder="Email Address" required />
                    </Col>
                  
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message"  placeholder="Message" required></textarea>
                      <button   type="submit"><span>Send</span></button>
                    </Col>
                    {status.message && (
                      <p style={{ marginTop: "10px", color: status.isError ? "#ff6b6b" : "#6ef5a5" }}>
                        {status.message}
                      </p>
                    )}
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

