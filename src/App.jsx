import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./Components/Header/Header";
import ScrollButton from "./Components/ScrollButton/ScrollButton";

export const InitializeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme") || "false"));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", JSON.stringify(!theme));
  };
  return (
    <div
      className="bg-[#e6e6e6] h-screen"
      data-theme={theme ? "night" : "light"}
    >
      <InitializeContext.Provider
        value={{
          theme,
          handleThemeChange,
        }}
      >
        <Header />
        <ScrollButton />
        <Toaster />
      </InitializeContext.Provider>
    </div>
  );
}

export default App;
