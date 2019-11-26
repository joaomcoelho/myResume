import React from "react";
import Bullets from "./Bullets";

const Experience = props => {
  let experiences = props.experiences.map((item, i) => (
    <div key={i} style={{ paddingBottom: 10 }}>
      <div className="row">
        <div className="col-sm-1">
          <img
            src={item.img}
            alt="profileImg"
            style={{ borderRadius: 10, width: 50 }}
          />
        </div>
        <div className="col-sm-11">
          <h5> {item.title} </h5>
          <h6>
            {item.dateStart} — {item.dateEnd}{" "}
          </h6>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-11">
          <Bullets bullets={item.bullets} />
        </div>
      </div>
    </div>
  ));
  return <div>{experiences}</div>;
};
export default Experience;
