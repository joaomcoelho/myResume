import React from "react";

const Skill = props => {
  let scores = props.scores.map((item, i) => (
    <div key={i}>
      <div>{item.title}</div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ flex: item.score }}
        ></div>
      </div>
    </div>
  ));
  return <div>{scores}</div>;
};

export default Skill;
