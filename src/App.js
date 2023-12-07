import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Home from "./homeComponent/Home";
import DashBoard from "./DashBoard Component/DashBoard";
import Profile from "./DashBoard Component/Profile";
import SearchBar from "./homeComponent/SearchBar";
import SignIn from "./homeComponent/SignIn";
import SignUp from "./homeComponent/SignUp";
import NewError from "./DashBoard Component/NewError";
import Tables from "./DashBoard Component/Tables";
import Notifications from "./DashBoard Component/Notifications";
import DashBoardFooter from "./SubDashboard component/DashBoardFooter";

function App() {
  const [newColor, setNewColor] = useState("white");
  const [newActive, setNewActive] = useState("black");
  const [hideAll, setHideAll] = useState(false);
  const [signupHide, setSignupHide] = useState(false);
  const HandleColorClick = (color) => {
    setNewColor(color);
  };
  const handleActiveClick = (activated) => {
    setNewActive(activated);
  };
  const handleHideAll = () => {
    setHideAll(true);
  };
  const handleSignupHide = () => {
    setSignupHide(true);
  };

  return (
    <Router>
      <>
        <div className={`${hideAll || signupHide ? "" : "App"}`}>
          {hideAll || signupHide ? (
            ""
          ) : (
            <Home
              newColor={newColor}
              newActive={newActive}
              onClick3={handleHideAll}
              onClick4={handleSignupHide}
            />
          )}

          <div className={` ${hideAll || signupHide ? "" : "second-overflow"}`}>
            {hideAll || signupHide ? (
              ""
            ) : (
              <SearchBar
                onClick1={HandleColorClick}
                onClick2={handleActiveClick}
              />
            )}

            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route
                path="/signin"
                element={
                  <SignIn
                    setHideAll={setHideAll}
                    setSignupHide={setSignupHide}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <SignUp
                    setHideAll={setHideAll}
                    setSignupHide={setSignupHide}
                  />
                }
              />
              <Route path="*" element={<NewError />} />
            </Routes>
            <DashBoardFooter />
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
