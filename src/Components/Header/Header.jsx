import { useRef, useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { HashLoader } from "react-spinners";
import Repos from "../Repos/Repos";
import UserDetails from "../UserDetails/UserDetails";
import { InitializeContext } from "../../App";

export default function Header() {
  const { handleThemeChange, theme } = useContext(InitializeContext);
  const [data, setData] = useState({});
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const value = inputRef.current.value;
    if (value === "") {
      toast.error("Please enter your username first!");
      setIsLoading(false);
      return;
    }
    const url = `https://api.github.com/users/${value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setData(data);
        }
        if (data?.message) {
          toast.error("Incorrect Username");
        }
        setIsLoading(false);
      });
  };

  const handleRepos = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = `https://api.github.com/users/${data?.login}/repos`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center absolute top-0 left-0 backdrop-blur-[9px] z-50">
        <HashLoader size={55} color={"#19D3AE"} />
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center py-12 bg-[#e6e6e6]">
        {/* <div>
          <button
            id="theme-toggler"
            onClick={handleThemeChange}
            className="h-12 w-12 flex justify-center items-center rounded-full"
            title={`Click to ${theme ? "Light" : "Dark"} theme`}
          >
            {theme ? (
              <svg
                className="swap-on fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            ) : (
              <svg
                className="swap-off fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            )}
          </button>
        </div> */}
        <h1 className="text-xl md:text-3xl font-semibold">
          Welcome To GitHub User Details API
        </h1>
      </div>
      <div className="flex justify-center items-center mx-auto pb-5">
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            id="search-input"
            ref={inputRef}
            placeholder="Enter your GitHub username"
            className="input w-full max-w-xs flex justify-center items-center mx-auto"
          />
          <button
            type="submit"
            className="p-2 px-6 rounded-lg font-semibold flex justify-center items-center mx-auto"
          >
            Submit
          </button>
        </form>
      </div>

      {data?.id && (
        <div className="flex justify-center items-center mx-auto">
          <form onSubmit={handleRepos}>
            <button className="p-3 px-7 rounded-lg font-semibold ">
              See All Repos
            </button>
          </form>
        </div>
      )}

      <div className="bg-[#e6e6e6]">
        <UserDetails data={data} />
        <Repos repos={repos} />
      </div>
    </>
  );
}
