import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import PresalePage from './pages/PresalePage';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/presale" element={<PresalePage />} />
      </Routes>
    </div>
  );
}

export default App;
