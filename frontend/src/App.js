import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Notifications from "./pages/Notifications/Notifications";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat";
import NavIcons from "./components/NavIcons/NavIcons";
function App() {
  return (
    <div className="App">
      {/* <div className="blur" style={{ top: '18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div> */}
      {/* <Home/> */}
      {/* <Profile/>  */}
      {/* <Auth/> */}
      {/* <NavIcons/> */}
      <Routes>
        <Route
          path="/"
          element={<Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/auth"
          element={<Auth />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }} className="pageNotFound">
              <h1 className="errorH">ERROR #404</h1>
              <h2>Page not found</h2>
            </main>
          }
        />
        <Route
          path="/notifications"
          element={<Notifications />}
        />
        <Route
          path="/chat"
          element={<Chat />}
        />
      </Routes>
    </div>
  );
}

export default App;
