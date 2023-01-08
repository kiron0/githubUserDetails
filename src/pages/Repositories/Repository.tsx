import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { InitializeContext } from "../../App";

export default function Repository({ repository }: any) {
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
    <div className="container mx-auto">
      <div className="container mx-auto pb-10">
        <div className="card w-full shadow-lg">
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
            <h2
              className="card-title hover:text-primary"
              title={repository?.name}
            >
              <a href={repository?.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                <i className='bx bxl-github text-xl'></i> {repository?.name?.length > 18
                  ? repository?.name?.slice(0, 18) + "..."
                  : repository?.name}
              </a>
            </h2>
            <p className="font-semibold py-3" title={repository?.description}>
              {repository?.description
                ? repository?.description?.slice(0, 30)
                : "Description not available"}
            </p>
            {repository?.homepage ? (
              <a
                href={repository?.homepage}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm text-white flex items-center gap-1 w-[40%] lg:w-1/3"
              >
                <i className='bx bx-link text-xl'></i> Live Site
              </a>
            ) : (
              <button
                className="w-1/2 lg:w-1/3 btn btn-primary btn-sm text-white"
                disabled
              >
                <a href="/" className="">
                  Not found
                </a>
              </button>
            )}
            {repository?.topic?.length > 0 ? (
              <div>
                {repository?.topics
                  ?.map((topic: any, index: number) => {
                    return (
                      <button
                        key={index}
                        className="btn no-animation btn-sm btn-info mr-2 mb-2 text-white cursor-default"
                      >
                        {topic}
                      </button>
                    );
                  })
                  .slice(0, 4)}

                {repository?.topics?.length > 4 && (
                  <div
                    data-tip={repository?.topics.slice(4).slice(",").join(", ")}
                    className="tooltip"
                  >
                    <button className="btn no-animation btn-sm btn-info mb-2 text-white cursor-default">
                      {repository?.topics.length - 4 + "+"}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="w-[70%] lg:w-1/2 btn no-animation btn-sm btn-info text-white cursor-default">
                Topics Not Available
              </button>
            )}
            <div className="card-actions justify-end pt-5 font-semibold">
              <div
                className="badge badge-neutral text-white py-3 flex items-center gap-1 select-none"
              >{
                  repository?.language === "TypeScript" ? <i className='bx bxl-typescript text-lg'></i> : repository?.language === "JavaScript" ? <i className='bx bxl-javascript text-lg'></i> : repository?.language === "HTML" ? <i className='bx bxl-html5 text-lg'></i> : repository?.language === "CSS" ? <i className='bx bxl-css3 text-lg'></i> : <i className='bx bx-code-alt' ></i>
                } {repository?.language ? repository?.language : "Not found"}
              </div>
              <div className="badge badge-ghost bg-base-200">
                <i className='bx bx-git-repo-forked mr-1' ></i> Created:{" "}
                {repository?.created_at
                  ? repository?.created_at.slice(0, 10)
                  : "Not found"}
              </div>
              <div className="badge badge-ghost bg-base-200">
                <i className='bx bx-git-commit mr-1' ></i> Last Updated:{" "}
                {repository?.updated_at
                  ? repository?.updated_at.slice(0, 10)
                  : "Not found"}
              </div>
              <div className="badge badge-ghost bg-base-200">
                <i className='bx bx-git-merge mr-1' ></i> Last Pushed:{" "}
                {repository?.pushed_at
                  ? repository?.pushed_at.slice(0, 10)
                  : "Not found"}
              </div>
            </div>
            <CopyToClipboard text={repository?.clone_url}>
              <button
                className="btn btn-sm text-white mx-auto mt-4 md:mt-8"
                onClick={handleCopy}
                title="Click to copy Git Clone URL"
              >
                Clone URL
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
}
