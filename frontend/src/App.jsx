import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddSnippet from "./pages/AddSnippet";
import MySnippets from "./pages/MySnippets";
import EditSnippet from "./pages/EditSnippet";
import PrivateRoute from "./utils/PrivateRoute";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Authenticated routes */}
        <Route
          path="/add-snippet"
          element={
            <PrivateRoute>
              <AddSnippet />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-snippets"
          element={
            <PrivateRoute>
              <MySnippets />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditSnippet />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
