import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";


export const Footer = () => {
  return (
    <footer className="footer pt-5">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <h3>Joselin</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/joselin-m-k-629601319/" target="blank"   ><i className="bi bi-linkedin text-white"></i></a>
                <a href="https://github.com/joselinmk"><i className="bi bi-github text-white"></i></a>
                <a href="#"><i class="bi bi-facebook text-white"></i></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
