import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/—Pngtree—purple stereo 404 page loss_4774965.png";
export default function Notfound() {
  return (
    <>
      <div className="row mt-5 m-auto">
        <div className="col-md-6 m-auto d-flex flex-column align-content-center justify-content-center align-items-center">
          <img src={logo} className="img-fluid" alt="" />
        </div>
        <Link className="textShadow text-center" to={`/home`}>
          <h3>Back To Home →</h3>
        </Link>
      </div>
    </>
  );
}
