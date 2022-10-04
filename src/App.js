import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Notfound from "./components/Notfound/Notfound";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Moviedetails from "./components/Moviedetails/Moviedetails";
import Tvshowdetails from "./components/Tvshowdetails/Tvshowdetails";
import Actordetails from "./components/Actordetails/Actordetails";
import Tv from "./components/Tv/Tv";

function App() {
  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userToken") && localStorage.getItem("userData")) {
      getUserData();
    }
  }, []);

  function getUserData() {
    let decodedToken = jwtDecode(localStorage.getItem("userToken"));
    setUserData(decodedToken);
    let userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
  }

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  function logOut() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    setUserData(null);
    navigate("/login");
  }

  function ProtectedRoute({ children }) {
    if (localStorage.getItem("userToken") && localStorage.getItem("userData")) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  }

  return (
    <>
      <div>
        <Navbar userData={userData} logOut={logOut} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute>
                  <Movies />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tv"
              element={
                <ProtectedRoute>
                  <Tv />
                </ProtectedRoute>
              }
            />
            <Route
              path="/moviedetails"
              element={
                <ProtectedRoute>
                  <Moviedetails />
                </ProtectedRoute>
              }
            >
              <Route
                path=":id"
                element={
                  <ProtectedRoute>
                    <Moviedetails />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route
              path="/tvshowdetails"
              element={
                <ProtectedRoute>
                  <Tvshowdetails />
                </ProtectedRoute>
              }
            >
              <Route
                path=":id"
                element={
                  <ProtectedRoute>
                    <Tvshowdetails />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route
              path="/actordetails"
              element={
                <ProtectedRoute>
                  <Actordetails />
                </ProtectedRoute>
              }
            >
              <Route
                path=":id"
                element={
                  <ProtectedRoute>
                    <Actordetails />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route
              path="/login"
              element={<Login getUserData={getUserData} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <Notfound />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
