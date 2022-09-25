import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { InitializeContext } from "../../App";

const Repository = ({ repository }) => {
  const { theme } = useContext(InitializeContext);
  const handleCopy = () => {
    if (theme) {
      toast.success("Copied to clipboard", {
        icon: "✋",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast.success("Copied to clipboard", {
        icon: "✋",
      });
    }
  };
  return (
      <div className="container mx-auto pb-10">
        <div className="card w-full shadow-xl">
          <div className="card-body">
            <label className="absolute right-2 top-2">
              {repository?.owner?.avatar_url && (
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                    <a
                      href={repository?.owner?.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={repository?.owner?.avatar_url} alt="" />
                    </a>
                  </div>
                </div>
              )}
            </label>
            <h2 className="card-title hover:text-primary">
              <a href={repository?.html_url} target="_blank" rel="noreferrer">
                {repository?.name}
              </a>
            </h2>
            <p className="font-semibold py-3">
              {repository?.description
                ? repository?.description
                : "Description not available"}
            </p>
            {repository?.homepage ? (
              <button className="w-1/3 lg:w-1/4 btn btn-primary btn-sm text-white">
                <a
                  href={repository?.homepage}
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>
              </button>
            ) : (
              <button
                className="w-1/2 lg:w-1/3 btn btn-primary btn-sm text-white"
                disabled
              >
                <a href="/" className="">
                  Not Available
                </a>
              </button>
            )}
            <div className="card-actions justify-end pt-5 font-semibold">
              <div
                className={`badge badge-ghost bg-green-400 ${
                  theme ? "text-white" : ""
                }`}
              >
                {repository?.language ? repository?.language : "Not available"}
              </div>
              <div className="badge badge-ghost bg-base-300">
                Created:{" "}
                {repository?.created_at
                  ? repository?.created_at.slice(0, 10)
                  : "Not available"}
              </div>
              <div className="badge badge-ghost bg-base-300">
                Last Updated:{" "}
                {repository?.updated_at
                  ? repository?.updated_at.slice(0, 10)
                  : "Not available"}
              </div>
              <div className="badge badge-ghost bg-base-300">
                Last Pushed:{" "}
                {repository?.pushed_at
                  ? repository?.pushed_at.slice(0, 10)
                  : "Not available"}
              </div>
            </div>
            <CopyToClipboard text={repository?.clone_url}>
              <button
                className="btn btn-primary btn-sm text-white mx-auto mt-4 md:mt-8"
                onClick={handleCopy}
                title="Click to copy Git Clone URL"
              >
                Clone URL
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
  );
};

export default Repository;
