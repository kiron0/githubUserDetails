import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./Components/Header/Header";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
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
      } h-screen bg-cover`}
    >
      <InitializeContext.Provider value={{ handleThemeChange, theme }}>
        <Header />
        <ScrollButton />
        <Toaster />
      </InitializeContext.Provider>
    </div>
  );
}

export default App;
