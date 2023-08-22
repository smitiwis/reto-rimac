import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { HomePage } from "../pages/Home";
import { BuildPlanPage } from "../pages/BuildPlan";
import { ThankPage } from "../pages/Thank";
import { Header } from "../components/header/Header";
import { Container } from "../components/Layouts/Container";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/armar-plan" element={<BuildPlanPage />} />
          <Route path="/gracias" element={<ThankPage />} />
          <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>
      </main>
      <footer></footer>
    </Router>
  );
};

export default AppRoutes;
