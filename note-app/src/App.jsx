import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(heading);
    // console.log(details);
    //Only add note if there is some heading and details
    if (heading != "" && details != "") {
      //1st way of pushing
      const newtask = [...task];
      newtask.push({ heading, details, id: Date.now() });
      setTask(newtask);

      //2nd way of doing the samething
      // const copyTask = [...task, { heading, details,id: Date.now() }];
      // setTask(copyTask);

      //3rd way of pushing
      // setTask([...task, { heading, details ,id: Date.now()}]);
    }
    setHeading("");
    setDetails("");
  };

  const headingHandler = (e) => {
    setHeading(e.target.value);
  };

  const detailHandler = (e) => {
    setDetails(e.target.value);
  };

  const deletenote = (idx) => {
    const updatedtask = [...task];
    updatedtask.splice(idx, 1);
    setTask(updatedtask);
  };

  return (
    <div className="h-screen lg:flex text-white ">
      <form
        onSubmit={submitHandler}
        className="flex items-start  p-10 gap-4  flex-col lg:w-1/2"
      >
        {/* Input for title */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={heading}
          onChange={headingHandler}
          className="w-full border-2 outline-none p-4 rounded-xl text-2xl border-white
             placeholder:text-white/40"
        />

        {/* Input for details */}
        <textarea
          type="text"
          placeholder="Enter Details"
          name=""
          id=""
          value={details}
          onChange={detailHandler}
          className="w-full h-32 border-white border-2 outline-none p-4 rounded-xl text-lg placeholder:text-white/40 "
        ></textarea>

        {/* Button for submission */}
        <button className="border-white  px-5 outline-none py-2  border-2 rounded-xl w-full bg-white text-black font-bold active:bg-black hover:bg-gray-400 hover:scale-105  active:text-white active:scale-y-95">
          Add Note
        </button>
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4cDgR-Iu7ErFQuEg4V489UAAgqZCVsBp1Q&s"
          alt=""
          className="h-60 rotate-y-180 object-cover"
        /> */}
      </form>
      <div className=" lg:w-1/2  p-10 lg:border-l-2 border-white">
        <h1 className="text-3xl font-bold gap-5">Recent Notes</h1>

        <div className=" flex flex-wrap justify-center md:justify-start lg:justify-start items-center gap-4 h-full overflow-auto  ">
          {task.map((ele, idx) => (
            <div
              key={idx}
              className="h-52 w-44 rounded-2xl bg-white mt-8 bg-cover flex flex-col items-start justify-between  p-2 overflow-y-auto relative bg-[url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')]  scrollbar-hide"
            >
              <div className="w-full ">
                <h1 className=" text-black text-center border-b-2 font-bold leading-tight w-full">
                  {ele.heading}
                </h1>
                <p className="text-black/70 w-full">{ele.details}</p>
              </div>
              <div className="w-full flex flex-col gap-1">
                <button
                  className="bg-red-800 w-full  text-white border-none rounded-2xl active:scale-105 hover:scale-105 trasnsition-all-0.3-ease hover:bg-red-900"
                  onClick={() => {
                    deletenote(idx);
                  }}
                >
                  <i class="ri-delete-bin-line"></i> Delete
                </button>
                <button
                  className="bg-yellow-200 w-full  text-black border-none rounded-2xl active:scale-105 hover:scale-105 trasnsition-all-0.3-ease hover:bg-yellow-400"
                  // onClick={() => {
                  //   deletenote(ele.id);
                  // }}
                >
                  <i class="ri-pencil-fill"></i> Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
