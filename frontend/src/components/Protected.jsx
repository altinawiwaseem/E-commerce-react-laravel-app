import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Protected = (props) => {
  const Cmp = props.Cmp;

  return (
    <div>
      <Cmp />
    </div>
  );
};

export default Protected;
