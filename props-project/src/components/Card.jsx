import React from "react";
import "../stylesheet/Card.css";
const Card = (props) => {
  const props1 = props.data;
  return (
    <>
      <div className="card">
        <div className="top">
          <div className="image">
            <img src={props1.logo} alt="" />
          </div>
          <button>
            Save <i class="ri-bookmark-line"></i>
          </button>
        </div>

        <div className="section">
          <h2>
            {props1.company_name} <span>{props1.time} days ago</span>
          </h2>
          <h1>{props1.position}</h1>
          <div className="button">
            <button>Contract</button>
            <button>Remote</button>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-left">
            <h2>${props1.salary}</h2>
            <p>{props1.location}, india</p>
          </div>
          <div className="bottom-right">
            <button>Apply now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
