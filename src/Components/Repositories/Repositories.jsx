import React from "react";
import Loading from "../Loading/Loading";
import Repository from "./Repository";

export default function Repositories({ repositories, pageLoading }) {
  if (pageLoading) {
    return <Loading />;
  }
  return (
    <>
      {repositories?.length > 0 ? (
        <div>
          {repositories?.length > 0 && (
            <h1 className="text-center font-semibold text-3xl py-12">
              All repos are here
            </h1>
          )}
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repositories?.map((repository) => (
              <Repository key={repository.id} repository={repository} />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
