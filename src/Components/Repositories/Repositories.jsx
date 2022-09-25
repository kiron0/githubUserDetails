import React from "react";
import { BallTriangle } from "react-loader-spinner";
import Repository from "./Repository";

const Repositories = ({ repositories, pageLoading }) => {
  if (pageLoading) {
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        visible={true}
      />
    );
  }
  return (
    <div>
      {repositories?.length > 0 && (
        <h1 className="text-center font-semibold text-3xl py-12">
          All repos are here
        </h1>
      )}
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repositories.map((repository) => (
          <Repository key={repository.id} repository={repository} />
        ))}
      </div>
    </div>
  );
};

export default Repositories;
