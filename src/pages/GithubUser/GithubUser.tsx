import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRepositories from "../../hooks/useRepositories";
import useUser from "../../hooks/useUser";
import Header from "../../shared/Header/Header";
import Pagination from "../Pagination/Pagination";
import Repositories from "../Repositories/Repositories";

export default function GithubUser() {
  const { username } = useParams();
  const [user] = useUser(username as any);
  const [repositories, setRepositories] = useState([]);
  const { pageLoading } = useRepositories(username as any, setRepositories);

  return (
    <div className="container mx-auto px-3 md:px-0 pb-10">
      <Header user={user} repositories={repositories} />
      <Repositories pageLoading={pageLoading} repositories={repositories} />
      <Pagination username={username} setRepositories={setRepositories} />
    </div>
  );
}
