import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import ProductList from './components/product-list/ProductList';


function App() {

  return (
    <BrowserRouter>
      <Routes>


    <Route path="/" exact element={<ProductList />} />
    

    </Routes>
    </BrowserRouter>
  );
}

export default App;
