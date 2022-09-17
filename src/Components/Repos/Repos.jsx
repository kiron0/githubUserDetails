import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

export default function Repos({ repos }) {
  const handleCopy = () => {
    toast.success("Copied to clipboard");
  };
  return (
    <div>
      {repos?.length > 0 && (
        <h1 className="text-center font-semibold text-3xl py-12">
          All repos are here
        </h1>
      )}
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-3 md:px-0 pb-10">
        {repos?.map((repo) => (
          <div className="card w-full" key={repo?.id}>
            <div className="card-body">
              <label className="absolute right-2 top-2">
                {repo?.owner?.avatar_url && (
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                      <a
                        href={repo?.owner?.html_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={repo?.owner?.avatar_url} alt="" />
                      </a>
                    </div>
                  </div>
                )}
              </label>
              <h2 className="card-title hover:text-primary">
                <a href={repo?.html_url} target="_blank" rel="noreferrer">
                  {repo?.name}
                </a>
              </h2>
              <p className="font-semibold py-3">
                {repo?.description
                  ? repo?.description
                  : "Description not available"}
              </p>
              {repo?.homepage ? (
                <button className="w-1/3 p-2 rounded-lg font-semibold">
                  <a
                    href={repo?.homepage}
                    className=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                </button>
              ) : (
                <button className="w-1/2 p-2 rounded-lg font-semibold">
                  <a href="/" className="" disabled>
                    Not Available
                  </a>
                </button>
              )}
              <div className="card-actions justify-end pt-5">
                <div className="badge badge-ghost bg-green-400">
                  {repo?.language ? repo?.language : "Not available"}
                </div>
                <div className="badge badge-ghost">
                  Created:{" "}
                  {repo?.created_at
                    ? repo?.created_at.slice(0, 10)
                    : "Not available"}
                </div>
                <div className="badge badge-ghost">
                  Last Updated:{" "}
                  {repo?.updated_at
                    ? repo?.updated_at.slice(0, 10)
                    : "Not available"}
                </div>
                <div className="badge badge-ghost">
                  Last Pushed:{" "}
                  {repo?.pushed_at
                    ? repo?.pushed_at.slice(0, 10)
                    : "Not available"}
                </div>
              </div>
              <CopyToClipboard text={repo?.clone_url}>
                <button
                  className="p-2 px-5 rounded-lg font-semibold mx-auto mt-4 md:mt-8"
                  onClick={handleCopy}
                  title="Click to copy Git Clone URL"
                >
                  Clone URL
                </button>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
