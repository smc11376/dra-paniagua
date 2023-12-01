import {useEffect} from "react";

const Themetoggle = () => {
  // const [theme, settheme] = useState(localStorage.getItem("theme"));
  // const themetoggle = () => {
  //   settheme(theme === "dark" ? "light" : "dark");
  // };
  useEffect(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
  }, []);

  // useEffect(() => {
  //   if (theme) {
  //     document.documentElement.setAttribute('data-theme', theme);
  //     localStorage.setItem('theme', theme);
  //   }
  // }, [theme]);

  return null;
  // return (
  //   <div className="nav_ac" onClick={themetoggle}>
  //     <WiMoonAltWaningCrescent4 />
  //   </div>
  // );
};

export default Themetoggle;
