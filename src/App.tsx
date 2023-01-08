import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import GithubUser from "./pages/GithubUser/GithubUser";
import Home from "./pages/Home/Home";
import NotFound from "./shared/NotFound/NotFound";

export const InitializeContext = createContext(null as any);

export default function App() {
  const [theme, setTheme] = useState<Boolean>(false);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme") || "false"));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme ? "true" : "false");
  };

  return (
    <div
      data-theme={theme && "night"}
      className={`${theme
        ? "bg-[url('./assets/bg-dark.jpg')]"
        : "bg-[url('./assets/bg-light.jpg')]"
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
