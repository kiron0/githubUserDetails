import axios from "axios";
import { useEffect, useState } from "react";

export default function useUser(username: string) {
  const API = `https://api.github.com/users/${username}`;

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      try {
        const { data } = await axios.get(API);
        setUser(data);
        setLoading(false);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    getUser();
  }, [API]);

  return [user, setUser, loading];
}
