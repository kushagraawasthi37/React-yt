import React from "react";

const Card = (props) => {
  const ele = props.ele;
  const idx = props.idx;
  return (
    <div>
      <a
        key={idx}
        href={ele.url}
        target="_blank"
        rel="noreferrer"
        className="hoverHandel rounded-lg "
      >
        <div className="h-80 w-60 md:h-60 md:w-50 rounded-xl flex flex-col overflow-hidden ">
          <img
            src={ele.download_url}
            alt=""
            className="h-[80%] object-cover object-center rounded-xl"
          />
          <h1 className="text-white font-bold pt-2 text-md text-center">
            {ele.author}
          </h1>
        </div>
      </a>
    </div>
  );
};

export default Card;
