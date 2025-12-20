import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../modules/layouts";
import Home from "../modules/home/pages/Home";
import Login from "../modules/auth/pages/Login";
import Dashboard from "../modules/dashboard/pages/dashboard";

const AppRouter = () => {
  // যদি আপনি কেবল Vercel-এ হোস্ট করেন, তবে basename এর প্রয়োজন নেই।
  // নিচের লাইনটি পরিবর্তন করে শুধু খালি স্ট্রিং করে দিন।
  const basename = ""; 

  return (
    <BrowserRouter basename={basename}>
      <Routes>
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