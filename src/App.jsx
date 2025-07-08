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
import Messege from "./components/messege";

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
        <Route path="calendar" element={<Calendar />} />
        <Route path="chat" element={<Chat />} />
        <Route path="team" element={<Team />} />
        <Route path="messege" element={<Messege /> } />
      </Route>
    </Routes>
  );
}

export default App;
