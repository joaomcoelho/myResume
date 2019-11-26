import React from "react";

const Bullets = props => {
  let bullets = props.bullets.map((bullet, i) => (
    <div key={i}>
      <li>{bullet.description}</li>
    </div>
  ));
  return <div>{bullets}</div>;
};

export default Bullets;
