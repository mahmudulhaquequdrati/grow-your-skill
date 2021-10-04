import React from "react";

import "./NotFound.css";

const img =
  "https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg?size=338&ext=jpg";

const NotFound = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center w-100">
      <img src={img} alt="" />
    </div>
  );
};

export default NotFound;
