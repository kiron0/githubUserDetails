import React from "react";
import { FiLink2 } from "react-icons/fi";
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
                    <div className="w-72 rounded-full ring ring-offset-base-100 ring-offset-2 ">
                      <img src={data?.avatar_url} alt="" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:w-1/2 pt-11 lg:pt-0 leading-loose">
              <h1 className="text-3xl font-bold">{data?.name}</h1>
              <p className="font-semibold">{data?.bio}</p>
              <p className="flex items-center">
                {data?.location && <MdLocationPin className="text-xl" />}
                {data?.location}
              </p>
              <p className="inline">
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
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center mx-auto -mt-16">
        {data?.html_url && (
          <a
            href={data?.html_url}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-1 hover:text-primary"
          >
            <FiLink2 />
            {data?.html_url}
          </a>
        )}
      </div>
    </>
  );
}
