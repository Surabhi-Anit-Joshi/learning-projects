import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { BranchDetailPage } from './pages/BranchDetailPage';
import { DashboardPage } from './pages/DashboardPage';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/branch/:id" element={<BranchDetailPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
