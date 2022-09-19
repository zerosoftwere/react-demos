import Header from './components/Header/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Product from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Product />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
