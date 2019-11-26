import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Projects = props => {
  let projects = props.projects.map((item, i) => (
    <div key={i}>
      <h5>
        <FontAwesomeIcon className="App-icon" icon={faStar} />
        {item.title}
      </h5>
      <div>{item.description}</div>
    </div>
  ));
  return <div>{projects}</div>;
};

export default Projects;
