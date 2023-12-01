import {Socialicons} from "@/components/socialicons";
import withRouter from "@/hooks/withRouter"
import {About} from "@/pages/about";
import {ContactUs} from "@/pages/contact";
import {Home} from "@/pages/home";
import {Portfolio} from "@/pages/portfolio";
import {Route, Routes} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }: any) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reservas" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
