import React, { useContext, useRef } from "react";
import { InitializeContext } from "../../App";
import gitHubDark from "../../assets/github-dark.png";
import gitHubLight from "../../assets/github-light.png";
import { toast } from "react-hot-toast";

export default function Home() {
  const { handleThemeChange, theme } = useContext(InitializeContext);
  const name = useRef() as React.MutableRefObject<HTMLInputElement>;
  const handleUserNameSearch = (e: any) => {
    e.preventDefault();

    const nameValue = name.current.value;

    // if name is empty
    if (!nameValue || nameValue === "") {
      if (theme) {
        toast.error("Please Enter GitHub Username..!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        toast.error("Please Enter GitHub Username..!");
      }
      return;
    } else {
      window.location.href = `/${nameValue}`;
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen overflow-x-hidden">
      <div className="flex justify-center items-center gap-4 backdrop-blur-lg glass px-1 fixed top-4 right-4 rounded-xl">
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
            href="https://github.com/kiron0/githubUserDetails"
            target="_blank"
            rel="noreferrer"
            title="Github User Details"
          >
            <button className="flex justify-center">
              <img
                className="h-10 md:h-12 w-10 md:w-12"
                src={`${theme ? gitHubDark : gitHubLight}`}
                alt="github"
              />
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="w-1/3 md:w-1/2 h-auto"
          src={`${theme ? gitHubDark : gitHubLight}`}
          alt="github"
        />
      </div>
      <div className="flex justify-center pb-0">
        <h1 className="text-xl text-center md:text-3xl font-semibold pt-4 md:pt-0">
          Welcome To <span className={theme && "text-primary"}>Git5</span> Web App
        </h1>
      </div>
      <p className="text-sm md:text-xl text-center">
        Type your username with "/" after the root URL to see your details
      </p>
      <p className="text-sm md:text-xl duration-300 cursor-not-allowed select-none">
        Ex: <span>{window.location.href}kiron0</span>
      </p>
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
}
