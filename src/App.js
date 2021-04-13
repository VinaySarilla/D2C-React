import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Setting from "./components/Setting";
function App() {
  return (
    <Router>
      <div className="design1">
        <div className="container">
          <div className="row">
            <div
              className="col-3"
              style={{ backgroundColor: "white", borderRadius: "15px 0 0 15px" }}
            >
              <Navbar />
            </div>
            <div
              className="col-6"
              style={{ backgroundColor: "rgb(255 243 255)" }}
            >
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/setting">
                  <Setting />
                </Route>
              </Switch>
            </div>
            <div
              className="col-3"
              style={{
                backgroundColor: "hsl(313deg 100% 96%)",
                borderRadius: "0 15px 15px 0",
              }}
            >
              <h1>Helloright</h1>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
