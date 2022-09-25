import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import GithubUser from "./Components/GithubUser/GithubUser";
import Home from "./Components/Home/Home";
import ThemeChanger from "./Components/ThemeChanger/ThemeChanger";
import NotFound from "./Components/NotFound/NotFound";
export const InitializeContext = createContext(null);

function App() {
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
      className={`${
        theme
          ? "bg-[url('https://i.ibb.co/y8QMy2P/bg-dar-md.jpg')]"
          : "bg-[url('https://i.ibb.co/r66ZP7V/bg-light-md.jpg')]"
      } h-screen bg-cover overflow-x-hidden`}
    >
      <InitializeContext.Provider value={{ handleThemeChange, theme }}>
        <ThemeChanger />
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

export default App;
