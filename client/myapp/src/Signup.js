import axios from "axios";
import React, { useEffect, useState } from "react";

const Signup = ({ handleSignup }) => {
  return (
    <div>
      <button onClick={handleSignup}>회원가입</button>
    </div>
  );
};
export default Signup;
