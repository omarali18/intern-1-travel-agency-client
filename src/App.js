import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./pages/Home/Home";
import Appbar from "./pages/Shared/Appbar/Appbar";
import Login from "./pages/Login/Login/login";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import AddBlog from "./pages/Dashboard/AddBlog/AddBlog";
import AddExperience from "./pages/AddExperience/AddExperience";
import AuthProvider from "./context/AuthProvider";
import SingleExperiences from "./pages/SingleExperiences/SingleExperiences";
import Footer from "./pages/Shared/Footer/Footer";
import PrivateRoute from "./pages/Login/Login/PrivateRoute/PrivateRoute";
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
        <Appbar/>
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/addExperience" element={<AddExperience />} />
            
            <Route path="/singleExperience/:id" element={<PrivateRoute> <SingleExperiences /></PrivateRoute>} />

            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >

              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute> } />
              <Route path="/dashboard/addBlog" element={<AddBlog />} />

            </Route>

            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
