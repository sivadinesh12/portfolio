import "./projectCard.css";

const ProjectCard = (props) => {
  const { eachItem } = props;
  const { projectName, description, imgUrl } = eachItem;
  return (
    <div className="slide">
      <div className="img-container">
        <img src={imgUrl[0]} alt="project-img" className="img-1" />
        <img src={imgUrl[1]} alt="project-img" className="img-2" />
      </div>
      <h2 className="project-heading">{projectName}</h2>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
