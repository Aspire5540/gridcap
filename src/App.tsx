import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Gridcap from './pages/Gridcap';
import Navbar from './components/Navbar';
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/gridcap"
          element={
            // <ProtectedRoute>
              <Gridcap />
            // </ProtectedRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
