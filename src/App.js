import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Setting from "./components/Setting";
import Technologies from "./components/Pages/Technologies";
import Projects from "./components/Pages/Projects";
import { AnimatePresence } from "framer-motion";
import Contact from "./components/Pages/Contact";

function App() {
  const location = useLocation();
  return (
    <div className="design1">
      <div className="container">
        <div className="row">
          <div
            className="col-3"
            style={{
              backgroundColor: "white",
              borderRadius: "15px 0 0 15px",
            }}
          >
            <Navbar />
          </div>
          <div
            className="col-9"
            style={{
              backgroundColor: "rgb(230 226 255)",
              borderRadius: "0 15px 15px 0",
            }}
          >
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/setting">
                  <Setting />
                </Route>
                <Route path="/technologies">
                  <Technologies />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
