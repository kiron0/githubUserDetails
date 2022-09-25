import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import GithubUser from "./Components/GithubUser/GithubUser";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
export const InitializeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };
  return (
    <div
      data-theme={theme && "night"}
      className={`${theme
          ? "bg-[url('./Assets/bg-dark.jpg')]"
          : "bg-[url('./Assets/bg-light.jpg')]"
        } bg-cover`}
    >
      <InitializeContext.Provider value={{ handleThemeChange, theme }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<GithubUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </InitializeContext.Provider>
    </div>
  );
}
