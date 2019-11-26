import React from "react";

const Education = props => {
  let education = props.education.map((item, i) => (
    <div key={i} style={{ paddingBottom: 10 }}>
      <h6> {item.course} </h6>
      <h6> {item.university} </h6>
      <h6>
        {item.dateStart} — {item.dateEnd}{" "}
      </h6>

      <div>{item.description}</div>
      <div>
        <b>Relevant Courses:</b>
        {item.courses}
      </div>
    </div>
  ));
  return <div>{education}</div>;
};

export default Education;
