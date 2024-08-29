import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListProducts } from './pages/listProducts/index.jsx';
import { ProductsId } from './pages/productsId/index.jsx';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<ListProducts />}/>
          <Route path='/productsId' element={<ProductsId/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
