import MainLayout from "./layout/mainLayout";
import Dashboard from "./pages/Dashboard";
import FileManager from "./pages/fileMananger";
import HomePage from "./pages/homePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<MainLayout />}>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="files" element={<FileManager />} />
      </Route>
    </Routes>
  );
}

export default App;
