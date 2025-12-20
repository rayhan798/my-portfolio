import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../modules/layouts";
import Home from "../modules/home/pages/Home";
import Login from "../modules/auth/pages/Login";
import Dashboard from "../modules/dashboard/pages/dashboard";

const AppRouter = () => {
  // Vite এ প্রোডাকশন চেক করার সঠিক নিয়ম
  const basename = import.meta.env.MODE === 'production' ? '/my-portfolio' : '';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        {/* মেইন লেআউটের ভেতরে সব পেজ রাখতে চাইলে এভাবে দিন */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;