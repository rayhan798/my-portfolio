import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../modules/layouts";
import Home from "../modules/home/pages/Home";
import Login from "../modules/auth/pages/Login";
import Dashboard from "../modules/dashboard/pages/dashboard";

const AppRouter = () => {
 
  const basename = ""; 

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
          <Route path="/admin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;