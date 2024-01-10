import HeaderMain from "@/header";
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
      <ScrollToTop>
        <HeaderMain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
