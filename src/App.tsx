import MainLayout from "./layout/mainLayout";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/homePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<MainLayout />}>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="inactive" element={<h2>Inactive Listings</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
