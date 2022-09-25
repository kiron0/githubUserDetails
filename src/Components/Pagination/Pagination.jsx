import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
import useRepositories from "../../Hooks/useRepositories";

export default function Pagination({ username, setRepositories }) {
  const { page, setPage, pageNumber, setNewer, newer } = useRepositories(
    username,
    setRepositories
  );

  return (
    <div className="table mx-auto my-10">
      <div className="btn-group py-5">
        <button
          onClick={() => setPage(page - 1)}
          className={`btn btn-primary btn-outline btn-sm ${
            page === 1 ? "btn-disabled" : undefined
          }`}
        >
          «
        </button>

        {[...Array(pageNumber).keys()].map((number) => (
          <button
            key={number}
            onClick={() => setPage(number + 1)}
            className={`${
              page === number + 1
                ? "btn btn-sm btn-primary"
                : "btn btn-sm btn-outline btn-primary"
            }`}
          >
            {number + 1}
          </button>
        ))}

        <button
          onClick={() => setPage(page + 1)}
          className={`btn btn-primary btn-outline btn-sm ${
            page === pageNumber ? "btn-disabled" : undefined
          }`}
        >
          »
        </button>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setNewer(false)}
          className={`capitalize btn btn-sm btn-outline ${
            !newer ? "btn-disabled" : "btn-primary"
          }`}
        >
          {<AiOutlineArrowLeft />} Older
        </button>
        <button
          onClick={() => setNewer(true)}
          className={`capitalize btn btn-sm btn-outline ${
            newer ? "btn-disabled" : "btn-primary"
          }`}
        >
          Newer {<AiOutlineArrowRight />}
        </button>
      </div>
    </div>
  );
}
