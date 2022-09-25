import React, { useRef } from "react";

const Home = () => {
  const name = useRef();
  const handleUserNameSearch = (e) => {
    e.preventDefault();
    window.location.href = `/${name.current.value}`;
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen overflow-x-hidden">
      <div className="flex justify-center pb-0">
        <h1 className="text-xl md:text-3xl font-semibold pt-4 md:pt-0">
          Welcome To GitHub User Details API
        </h1>
      </div>
      <p className="text-md md:text-xl">
        Type your username with "/" after the root URL
      </p>
      <p className="text-md md:text-xl">Ex: http://localhost:3000/kiron0</p>
      <p className="divider w-[50%] md:w-[30%] lg:w-[20%] mx-auto">OR</p>
      <form>
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
