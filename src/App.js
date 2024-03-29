import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CourseDetails from "./Components/Home/CourseDetails";
import Dashboard from "./Components/Student/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/CourseDetails"
            element={<CourseDetails></CourseDetails>}
          ></Route>
          <Route
            exact
            path="/StudentDashboard"
            element={<Dashboard/>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
