import MainLayout from "./layout/mainLayout";
import HomePage from "./pages/homePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Dashboard" element={<MainLayout />}>
        <Route path="active" element={<h2>Active Listings</h2>} />
        <Route path="inactive" element={<h2>Inactive Listings</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
