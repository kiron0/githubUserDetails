import React from "react";
import Loading from "../../components/Loading/Loading";
import Repository from "./Repository";

type RepositoriesProps = {
  repositories: any;
  pageLoading: boolean;
}

export default function Repositories({ repositories, pageLoading }: RepositoriesProps) {
  if (pageLoading) {
    return <Loading />;
  }
  return (
    <>
      {repositories?.length > 0 ? (
        <div>
          {repositories?.length > 0 && (
            <div className="py-12">
              <h1 className="text-center font-semibold text-xl md:text-3xl">
                All repos are here
              </h1>
              <div className="flex justify-center gap-1 my-2">
                <p className="w-24 md:w-28 lg:w-32 h-1 bg-primary"></p>
                <p className="w-5 md:w-12 h-1 bg-primary"></p>
                <p className="w-3 md:w-7 h-1 bg-primary "></p>
              </div>
            </div>
          )}
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repositories?.map((repository: any) => (
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
