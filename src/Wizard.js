import React from "react";

const Wizard = (props) => {
  return (
    <div className="Wizard">
      <div>{props.wizard.name}</div>
      <div>{props.wizard.house}</div>
    </div>
  );
};

export default Wizard;
