import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { HashLoader } from "react-spinners";
import Repos from "./Repos";
import UserDetails from "./UserDetails";

export default function Header() {
  const [data, setData] = useState({});
  const [repos, setRepos] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(10);
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
    const url = `https://api.github.com/users/${data?.login}/repos?page=${page}&show=${show}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setIsLoading(false);
      });
  };

  const finalDataArr = repos;

//   console.log(finalDataArr);

  useEffect(() => {
    setFinalData(finalDataArr);
  }, [page, show, finalDataArr]);

  const total = repos?.total;

  const pageHandle = (page) => {
    setPage(page);
  };

  const lastPage = Math.ceil(eval(total / show));

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center absolute top-0 left-0 backdrop-blur-[9px] z-50">
        <HashLoader size={55} color={"#19D3AE"} />
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center mx-auto pt-20 pb-5">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter your GitHub username"
            className="input input-bordered w-full max-w-xs flex justify-center items-center mx-auto"
          />
          <input
            type="submit"
            value="Submit"
            className="btn flex justify-center items-center mx-auto"
          />
        </form>
      </div>

      {data?.id && (
        <div className="flex justify-center items-center mx-auto">
          <form onSubmit={handleRepos}>
            <button className="btn">See All Repos</button>
          </form>
        </div>
      )}

      <div>
        <UserDetails data={data} />
        <Repos
          repos={repos}
          lastPage={lastPage}
          page={page}
          pageHandle={pageHandle}
        />
      </div>
    </>
  );
}
