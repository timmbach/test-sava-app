import React from "react";
import style from "./ComingSoon.module.css";
import soon from "../../assets/soon.png";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className={style.coming_soon}>
      <img src={soon} alt="soon" className={style.coming_soon_img} />
      <Link to="/dashboard" className={style.btn}>
        Go to Dashboard
      </Link>
    </div>
  );
};

export default ComingSoon;
