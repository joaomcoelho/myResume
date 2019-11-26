import React from "react";

const SkillLoading = props => {
  let scores = props.scores.map((item, i) => (
    <div key={i}>
      <div>{item.title}</div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ flex: item.score, textAlign: "left", paddingLeft: 10 }}
        >
          Loading...
        </div>
      </div>
    </div>
  ));
  return <div>{scores}</div>;
};

export default SkillLoading;
