import React from "react";
import { MdLocationPin } from "react-icons/md";

const Header = ({ user }) => {
  const {
    id,
    avatar_url,
    html_url,
    name,
    company,
    location,
    twitter_username,
    following,
    public_repos,
    followers,
    blog,
    bio,
    created_at,
    updated_at,
  } = user;

  return (
    <>
      <section className="body-font py-16">
        <div className="hero">
          <div className="hero-content flex-col justify-between lg:flex-row mx-auto">
            <div className="w-full lg:w-1/2 lg:ml-6">
              <div className="h-full flex justify-center">
                {avatar_url && (
                  <div className="avatar">
                    <div className="w-72 md:w-80 rounded-full ring ring-offset-base-100 ring-offset-2 ">
                      <a href={avatar_url} target="_blank" rel="noreferrer">
                        <img src={avatar_url} alt="" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:w-1/2 pt-11 lg:pt-0 leading-loose text-center md:text-start">
              <h1 className="text-2xl md:text-3xl font-bold">
                <a href={html_url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </h1>
              <p className="font-semibold">{bio}</p>
              {company && (
                <p className="font-semibold">
                  {company ? company : "Not available"}
                </p>
              )}
              <p className="flex items-center justify-center md:justify-start font-semibold py-2">
                {location && <MdLocationPin className="text-xl" />}
                {location}
              </p>
              <p>
                {twitter_username && (
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://twitter.com/{twitter_username}
                  </a>
                )}
              </p>
              <p>
                {blog && (
                  <a href={`${blog}`} target="_blank" rel="noreferrer">
                    {blog}
                  </a>
                )}
              </p>

              {id && (
                <div className="card-actions justify-center md:justify-start py-2 font-semibold">
                  <div className="badge badge-ghost bg-base-300">
                    Public Repos:{" "}
                    {public_repos ? public_repos : "Not available"}
                  </div>
                  <div className="badge badge-ghost bg-base-300">
                    Followers: {followers ? followers : "Not available"}
                  </div>
                  <div className="badge badge-ghost bg-base-300">
                    Following: {following ? following : "Not available"}
                  </div>
                </div>
              )}

              {created_at && (
                <p>
                  <span className="font-semibold">Created at:</span>{" "}
                  {created_at ? created_at.slice(0, 10) : "Not available"}
                </p>
              )}
              {updated_at && (
                <p>
                  <span className="font-semibold">Updated at:</span>{" "}
                  {updated_at ? updated_at.slice(0, 10) : "Not available"}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
