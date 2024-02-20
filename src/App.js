import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
// import Product from "./Pages/Product";
import Header from "./Components/Header";
import React,{Suspense} from "react";


const Product = React.lazy(() => import ('./Pages/Product'));
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header/>
        
          <Suspense fallback = { <div className="spinner-border text-danger">
            {/* <h1>please wait</h1> */}
          </div>}><Home/></Suspense></>}></Route>

        <Route path="/product" element={<><Header/>
        
        <Suspense fallback = { <div className="spinner-border text-danger">
          {/* <h1>please wait</h1> */}
          </div>}><Product/></Suspense></>}></Route>

      </Routes>
    </BrowserRouter>

    
   </>
  );
}

export default App;
