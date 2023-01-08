import React, { useContext } from "react";
import { MdLocationPin } from "react-icons/md";
import { BiLeftArrow } from "react-icons/bi";
import { InitializeContext } from "../../App";
import gitHubLight from "../../assets/github-light.png";
import gitHubDark from "../../assets/github-dark.png";
import { useNavigate } from "react-router-dom";

export default function Header({ user, repositories }: any) {
  const navigate = useNavigate();
  const { handleThemeChange, theme } = useContext(InitializeContext);
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
        {
          repositories.length > 0 && (
            <>
              <div
                className={`flex justify-center items-center gap-4 backdrop-blur-lg glass z-50 fixed top-4 left-4 rounded-xl p-2 px-3 cursor-pointer`}
                onClick={() => navigate("/")}
              >
                <BiLeftArrow /> Back
              </div>
              <div
                className={`flex justify-center items-center gap-4 backdrop-blur-lg glass z-50 fixed top-4 right-4 md:right-8 rounded-xl px-1`}
              >
                <div className="flex justify-center items-center">
                  <button
                    onClick={handleThemeChange}
                    className="pt-2"
                    title={`Click to ${theme ? "Light" : "Dark"} theme`}
                  >
                    {theme ? (
                      <input type="checkbox" className="toggle toggle-sm" checked />
                    ) : (
                      <input type="checkbox" className="toggle toggle-sm" />
                    )}
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="https://github.com/kiron0/github-user-details"
                    target="_blank"
                    rel="noreferrer"
                    title="Github User Details"
                  >
                    <button className="flex justify-center">
                      <img
                        className="h-10 md:h-12 w-10 md:w-12"
                        src={`${theme ? gitHubDark : gitHubLight}`}
                        alt="github"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </>
          )
        }
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
                    className="flex items-center justify-center md:justify-start gap-1 hover:text-blue-500"
                  >
                    <i className='bx bxl-twitter text-xl'></i> @{twitter_username}
                  </a>
                )}
              </p>
              <p>
                {blog && (
                  <a href={`${blog}`} target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start gap-1 hover:text-primary">
                    <i className='bx bx-link text-xl'></i> {blog}
                  </a>
                )}
              </p>

              {id && (
                <div className="card-actions justify-center md:justify-start py-2 font-semibold">
                  <div className="badge badge-primary text-white">
                    Public Repos:{" "}
                    {public_repos ? public_repos : "Not available"}
                  </div>
                  <div className="badge badge-primary text-white">
                    Followers: {followers ? followers : "Not available"}
                  </div>
                  <div className="badge badge-primary text-white">
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
}
