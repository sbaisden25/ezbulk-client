import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import ProductList from './components/product-list/ProductList';
import StackList from './components/stack-list/StackList';

import ReactGA from 'react-ga';

  const TRACKING_ID = "G-4M9VRX295F"; 
  ReactGA.initialize(TRACKING_ID);

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
