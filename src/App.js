import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
// import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat";
import Header from './components/Header/Header';
import Home from './pages/home/Home';
function App() {
  return (
    <div className="App">
    <div className="blur" style={{ top: "18%", right: "0" }}></div>
    <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
    {/* <Auth/> */}
    <Routes>
        <Route
          path="/"
          element={<Navigate to="home" />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/auth"
          element={<Navigate to="../home" /> }
        />
        <Route
          path="/profile/:id"
          element={ <Profile /> }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
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
