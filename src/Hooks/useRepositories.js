import { useEffect, useState } from "react";

export default function useRepositories(username, setRepositories) {
  const [pageLoading, setPageLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [page, setPage] = useState(1);
  const [size] = useState(5);
  const [newer, setNewer] = useState(true);

  useEffect(() => {
    setPageLoading(true);

    const url = `https://api.github.com/users/${username}/repos?page=${page}&per_page=${size}${
      newer ? "&sort=created" : ""
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRepositories(data);
        setPageLoading(false);
      })
      .catch((err) => {
        return err.message;
      });
  }, [page, size, username, pageNumber, setRepositories, newer]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        const numberOfPage = data.public_repos / size;
        setPageNumber(Math.ceil(numberOfPage));
      });
  }, [size, username, page, pageNumber]);

  return { pageLoading, page, setPage, pageNumber, setNewer, newer };
}
