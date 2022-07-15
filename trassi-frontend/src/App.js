import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./router";





function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          {/*  <Route path="/signin" element={<h1>Hola</h1>} /> */}

          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<Layout children={route.element} />}
            />
          ))}
        </Routes>
      </div>
    </Router>  
  );
}


export default App;

