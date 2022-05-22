import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Header, Isi, Bawahan} from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Header/>}/>
          <Route path="biodata" element={<Isi/>}/>
          <Route path="credit" element={<Bawahan/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;