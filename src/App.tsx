import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { 
  Header,
  Footer
} from "./common";
import {
  Contact,
  Home,
  Services,
  Subjects,
  Us,
} from "./pages";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/abut-us" element={<Us />} />
          <Route path="/services" element={<Services />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
