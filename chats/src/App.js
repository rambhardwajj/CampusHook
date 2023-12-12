import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatButton from "./components/ChatButton";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/forChat/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forChat">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/forChatlogin" element={<Login />} />
          <Route path="/forChat/register" element={<Register />} />
          <Route path="/forChat/chatbutton" element={<ChatButton />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
