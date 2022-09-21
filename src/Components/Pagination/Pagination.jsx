import React from "react";

export default function Pagination({
  totalRepos,
  reposPerPage,
  currentPage,
  setCurrentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center items-center py-10 gap-2">
      <div className="btn-group">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              className={`${
                page === currentPage ? "btn btn-active" : "btn"
              } text-white`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}
