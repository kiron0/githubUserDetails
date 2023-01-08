import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1>Page Not Found</h1>
      <button
        onClick={() => navigate("/")}
        className="btn btn-xs text-white mt-4"
      >
        Go Back to Home
      </button>
    </div>
  );
}
