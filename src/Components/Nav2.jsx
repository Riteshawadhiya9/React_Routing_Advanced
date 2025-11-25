import React from "react";
import {useNavigate} from 'react-router-dom';

const Nav2 = () => {

    const navigate = useNavigate()
    
  return (
    <div className="py-3 px-5 ">
      <button
        className="bg-emerald-300 text-black px-4 py-2 rounded cursor-pointer active:scale-95 transition-transform duration-200 m-4 font-medium"
        onClick={() => {
          navigate("/");
        }}
      >
        Return to Home Page
      </button>
      <button
        className="bg-emerald-300 text-black px-4 py-2 rounded cursor-pointer active:scale-95 transition-transform duration-200 m-4 font-medium"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        className="bg-emerald-300 text-black px-4 py-2 rounded cursor-pointer active:scale-95 transition-transform duration-200 m-4 font-medium"
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Nav2;
