import Headermain from "@/header";
import AnimatedCursor from "@/hooks/AnimatedCursor";
import withRouter from "@/hooks/withRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import {PropsWithChildren, useEffect} from "react";
import {BrowserRouter as Router, useLocation,} from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";

function _ScrollToTop(props: PropsWithChildren) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
