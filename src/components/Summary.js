import React from "react";

const Summary = props => {
  let summary = props.summary.map((item, i) => (
    <div key={i}>
      <p>{item.quote}</p>
    </div>
  ));
  return <div>{summary}</div>;
};

export default Summary;
