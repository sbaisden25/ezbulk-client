import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import ProductList from './components/product-list/ProductList';
import StackList from './components/stack-list/StackList';

function App() {

  return (
    <BrowserRouter>
      <Routes>


    <Route path="/" exact element={<ProductList />} />

    <Route path="/stacks" exact element={<StackList />} />
    

    </Routes>
    </BrowserRouter>
  );
}

export default App;
