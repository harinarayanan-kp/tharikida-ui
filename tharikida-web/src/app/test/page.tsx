import React from "react";
import { Dropdown } from "tharikida-ui";

const page = () => {
  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "500px",
          boxSizing: "border-box",
          backgroundColor: "grey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Dropdown options={["Option 1", "Option 2", "Option 3"]} />
      </div>
    </div>
  );
};

export default page;
