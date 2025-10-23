import React from "react";

const Button = (props) => {
  //Destructure same name as in props
  const { index, setIndex } = props;

  return (
    <>
      <div className="flex justify-center gap-4 w-full">
        <button
          disabled={index == 1}
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
          className="px-4 active:scale-95
                font-semibold text-black hover:bg-amber-300 hover:color-black py-2 bg-yellow-500 text-center rounded-lg"
        >
          <i class="ri-arrow-left-s-line"></i>Prev
        </button>
        <h1 className="text-center pt-2 font-bold">Page {index} </h1>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
          className="font-semibold text-black
                px-4 active:scale-95 hover:bg-amber-300 hover:color-black py-2 bg-yellow-500 text-center rounded-lg"
        >
          Next <i class="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </>
  );
};

export default Button;
