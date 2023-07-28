import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./common/Header";
import { Footer } from "./common/Footer";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
