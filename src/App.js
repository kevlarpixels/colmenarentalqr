import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlacePage from './PlacePage';
import PropertiesPage from './PropertiesPage';

function App() {
  return (
    <BrowserRouter basename="/colmenarentalqr">
      <Header />
      <Routes>
        <Route path="/" element={<PropertiesPage />} />
        <Route path="/place/:id" element={<PlacePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
