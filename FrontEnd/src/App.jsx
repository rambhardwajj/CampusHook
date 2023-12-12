import Main from './components/main'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import Communities from "./components/Communities"
import ChatButton from "./components/ChatButton";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from './pages/Home'

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/forChat/login" />;
    }
    return children
  };
  return (
    <>
      <Router>
              <Routes>
                <Route path="/" element={<Main />} /> 
          
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
                <Route path="/forChat/communities" element={<Communities/>} />
              </Route>
              </Routes>
        </Router>
    </>
  )
}

export default App