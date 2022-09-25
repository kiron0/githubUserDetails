import React, { useContext, useRef } from "react";
import { InitializeContext } from "../../App";

const Home = () => {
  const { handleThemeChange, theme } = useContext(InitializeContext);
  const name = useRef();
  const handleUserNameSearch = (e) => {
    e.preventDefault();
    window.location.href = `/${name.current.value}`;
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen overflow-x-hidden">
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-center items-center">
          <button
            onClick={handleThemeChange}
            className="pt-2"
            title={`Click to ${theme ? "Light" : "Dark"} theme`}
          >
            {theme ? (
              <input type="checkbox" className="toggle toggle-sm" checked />
            ) : (
              <input type="checkbox" className="toggle toggle-sm" />
            )}
          </button>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="https://github.com/kiron0/github-user-details"
            target="_blank"
            rel="noreferrer"
            title="Github User Details"
          >
            <button className="flex justify-center">
              <img
                className="h-10 md:h-12 w-10 md:w-12"
                src={`${
                  theme
                    ? "https://img.icons8.com/nolan/344/github.png"
                    : "https://img.icons8.com/ios-glyphs/452/github.png"
                }`}
                alt="github"
              />
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center pb-0">
        <h1 className="text-xl md:text-3xl font-semibold pt-4 md:pt-0">
          Welcome To GitHub User Details API
        </h1>
      </div>
      <p className="text-sm md:text-xl">
        Type your username with "/" after the root URL
      </p>
      <p className="text-sm md:text-xl">Ex: {window.location.href}kiron0</p>
      <p className="divider w-[50%] md:w-[30%] lg:w-[20%] mx-auto">OR</p>
      <form className="flex flex-col justify-center items-center w-full max-w-xs">
        <input
          type="text"
          ref={name}
          placeholder="Enter Your Username"
          className="input input-bordered input-primary w-full max-w-xs mt-2 mb-4 bg-transparent"
        />
        <button
          onClick={handleUserNameSearch}
          className="btn btn-primary text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
