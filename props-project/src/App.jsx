import React from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const experiences = [
    {
      time: 1,
      position: "Graphic Designer",
      company_name: "Amazon",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQC8zoGKyaMRDAgp9s-IEsGe1vKqWN1EC-Q&s",
      location: "Delhi",
      salary: "$7.2 / hour",
    },
    {
      time: 1,
      position: "Graphic Designer",
      company_name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      location: "Bangalore",
      salary: "$9 / hour",
    },
    {
      time: 1,
      position: "Graphic Designer",
      company_name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
      location: "Hyderabad",
      salary: "$9.6 / hour",
    },
    {
      time: 1,
      position: "Graphic Designer",
      company_name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      location: "Mumbai",
      salary: "$10.8 / hour",
    },
    {
      time: 1,
      position: "Graphic Designer",
      company_name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      location: "Delhi",
      salary: "$10.2 / hour",
    },
    {
      time: 1,
      position: "Graphic Designer",
      company_name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      location: "Hyderabad",
      salary: "$8.4 / hour",
    },
    {
      time: 1,
      position: "Graphic Designer",
      company_name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Adobe_Corporate_Logo.png",
      location: "Bangalore",
      salary: "$7.8 / hour",
    },
    {
      time: 1,
      position: "Graphic Designer",
      company_name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      location: "Pune",
      salary: "$9 / hour",
    },
    {
      time: 1,
      position: "Graphic Designer",
      company_name: "NVIDIA",
      logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg",
      location: "Chennai",
      salary: "$9.6 / hour",
    },
    {
      time: 1,
      position: "Graphic Designer",
      company_name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      location: "Gurgaon",
      salary: "$6.6 / hour",
    },
  ];

  return (
    <>
      <div className="parent">
        {experiences.map((ele, idx) => {
          return (
            <div key={idx}>
              {/* key mai idx pass isliye kiya taki react sabko recognize kar paye aache se mandatory nahi hai but good practice */}
              <Card data={ele} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
