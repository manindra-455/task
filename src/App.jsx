import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Team from "./pages/Team";
import ProtectedRoute from "./router/ProtectedRoute";
import MobileBlockPage from "./utility/MobileBlockPage";
import Login from "./pages/Login";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./components/Project/ProjectPage";
import Plan from "./pages/Plan";

function App() {
  return (
    <Routes>
      {/* login */}
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute fallback={<MobileBlockPage />}>
            <RootLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/view" element={<ProjectPage />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="chat" element={<Chat />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="plan" element={<Plan />} />
      </Route>
    </Routes>
  );
}

export default App;
