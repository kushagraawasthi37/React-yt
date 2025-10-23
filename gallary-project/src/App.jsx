import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    // console.log("Data aagya");
    setLoading(true);
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setLoading(false);
    setData(response.data);
    // console.log(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );

  let printUserData = "No photo availble";
  if (data.length > 0) {
    {
      printUserData = data.map((ele, idx) => <Card ele={ele} idx={idx} />);
    }
  }

  return (
    <div className="bg-black justify-between items-center  min-h-screen text-white flex flex-col p-10 ">
      {loading ? ( // 👇 show loading until data fetched
        <div className="flex flex-col items-center justify-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-white rounded-full animate-spin "></div>
          <p className="text-lg">Loading images...</p>
        </div>
      ) : (
        <>
          <div className="flex gap-4 flex-wrap p-4 justify-center items-center">
            {printUserData}
            <Button index={index} setIndex={setIndex} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
