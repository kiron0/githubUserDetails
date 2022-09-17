import React from "react";
import Pagination from "./Pagination";

export default function Repos({ repos, lastPage, page, pageHandle }) {
  return (
    <div>
      {repos?.length > 0 && (
        <h1 className="text-center font-semibold text-3xl pt-12">
          All Repos Here
        </h1>
      )}
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-3 md:px-0 pb-10">
        {repos?.map((repo) => (
          <div className="card w-full bg-base-100 shadow-xl" key={repo?.id}>
            <div className="card-body">
              <h2 className="card-title hover:text-primary">
                <a href={repo?.html_url} target="_blank" rel="noreferrer">
                  {repo?.name}
                </a>
              </h2>
              <p>{repo?.description ? repo?.description : "Not available"}</p>
              <div className="card-actions justify-start">
                <div className="card-actions justify-end">
                  <div className="badge badge-ghost bg-base-300">
                    {repo?.language ? repo?.language : "Not available"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {repos?.length > 0 && (
        <div>
          <Pagination
            lastPage={lastPage}
            page={eval(page)}
            pageHandle={pageHandle}
          />
        </div>
      )}
    </div>
  );
}
