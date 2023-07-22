import React, { Fragment } from "react";

const WorkingOnIt = () => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        //   flexDirection: "column",
        }}
        className="Onit-section"
      >
        <div style={{
            marginTop :"100px",
             display: "flex",
             alignItems: "center",
             justifyContent: "center",

        }} className="Onit-container">
          <h1>Hi, Dear i am Working On it</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default WorkingOnIt;
