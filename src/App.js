import './App.css';
import { useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import ProductList from './components/product-list/ProductList';
import StackList from './components/stack-list/StackList';

import ReactGA from 'react-ga';

  const TRACKING_ID = "UA-231099658-2"; 
  ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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
