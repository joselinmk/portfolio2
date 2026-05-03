import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        className="proj-imgbx"
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${title} project`}
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    </Col>
  )
}
