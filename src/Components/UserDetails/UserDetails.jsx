import React from "react";
import { MdLocationPin } from "react-icons/md";

export default function UserDetails({ data }) {
  return (
    <>
      <section className="body-font py-16">
        <div className="hero">
          <div className="hero-content flex-col justify-between lg:flex-row mx-auto">
            <div className="w-full lg:w-1/2 lg:ml-6">
              <div className="h-full flex justify-center">
                {data?.avatar_url && (
                  <div className="avatar">
                    <div className="w-72 md:w-80 rounded-full ring ring-offset-base-100 ring-offset-2 ">
                      <a href={data?.avatar_url} target="_blank" rel="noreferrer">
                        <img src={data?.avatar_url} alt="" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:w-1/2 pt-11 lg:pt-0 leading-loose text-center md:text-start">
              <h1 className="text-3xl font-bold">
                <a href={data?.html_url} target="_blank" rel="noreferrer">
                  {data?.name}
                </a>
              </h1>
              <p className="font-semibold">{data?.bio}</p>
              {data?.company && (
                <p className="font-semibold">
                  {data?.company ? data?.company : "Not available"}
                </p>
              )}
              <p className="flex items-center justify-center md:justify-start font-semibold py-2">
                {data?.location && <MdLocationPin className="text-xl" />}
                {data?.location}
              </p>
              <p>
                {data?.twitter_username && (
                  <a
                    href={`https://twitter.com/${data?.twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://twitter.com/{data?.twitter_username}
                  </a>
                )}
              </p>
              <p>
                {data?.blog && (
                  <a href={`${data?.blog}`} target="_blank" rel="noreferrer">
                    {data?.blog}
                  </a>
                )}
              </p>

              {data?.id && (
                <div className="card-actions justify-center md:justify-start py-2 font-semibold">
                  <div className="badge badge-ghost bg-base-300">
                    Public Repos:{" "}
                    {data?.public_repos ? data?.public_repos : "Not available"}
                  </div>
                  <div className="badge badge-ghost bg-base-300">
                    Followers:{" "}
                    {data?.followers ? data?.followers : "Not available"}
                  </div>
                  <div className="badge badge-ghost bg-base-300">
                    Following:{" "}
                    {data?.following ? data?.following : "Not available"}
                  </div>
                </div>
              )}

              {data?.created_at && (
                <p>
                  <span className="font-semibold">Created at:</span>{" "}
                  {data?.created_at
                    ? data?.created_at.slice(0, 10)
                    : "Not available"}
                </p>
              )}
              {data?.updated_at && (
                <p>
                  <span className="font-semibold">Updated at:</span>{" "}
                  {data?.updated_at
                    ? data?.updated_at.slice(0, 10)
                    : "Not available"}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
