import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CategoriesPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import ProductDescrPage from './pages/ProductDescrPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CategoriesPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path=':category' element={<ProductsPage />} />
          <Route path='product/:id' element={<ProductDescrPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
