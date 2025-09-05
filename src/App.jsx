import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from './pages/Dashboard/Home';
import Sobre from './pages/Dashboard/Sobre';
import Servicos from './pages/Dashboard/Servicos';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Rota protegida principal com rotas aninhadas */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }>
            {/* Rotas filhas - serão renderizadas dentro do Dashboard */}
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="servicos" element={<Servicos />} />
          </Route>
          
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;