import React from "react";

const Activities = props => {
  let scores = props.activities.map((item, i) => (
    <div key={i}>
      <div>• {item.description}</div>
    </div>
  ));
  return <div>{scores}</div>;
};

export default Activities;
