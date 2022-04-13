import axios from "axios";
import React, { useEffect, useState } from "react";

const Signout = ({ handleSignout }) => {
  //TODO : handleSignout으로 req.cookie보내서 서버에서 clearCookie하는지 확인
  return (
    <div>
      <button onClick={handleSignout}>로그아웃</button>
    </div>
  );
};

export default Signout;
