import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";
import ButtonAuth from "./components/button/ButtonAuth";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import RequireAuth from "./pages/requireAuth/RequireAuth";
import { useState } from "react";
import CreatePost from "./pages/create/CreatePost";
import ListPost from "./pages/list-post/ListPost";

const provider = new GoogleAuthProvider();
function App() {
  let navigate = useNavigate();
  const [dataAuth, setDataAuth] = useState();
  const handleLoginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setDataAuth(result.user);
        localStorage.setItem("accessToken", result.user.accessToken);
        navigate("/");
      })
      .catch((error) => {
        throw Error(error);
      });
  };

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <div className="container">
              <ButtonAuth onClick={handleLoginGoogle} />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home dataAuth={dataAuth} />
            </RequireAuth>
          }
        >
          <Route path="/" element={<ListPost />} />
          <Route path="create" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
