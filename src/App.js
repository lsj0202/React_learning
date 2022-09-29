import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={
              <>
                <Home /> 
              </>
            }
          />
          
          <Route path="/checkout" element={
              <>
                <Login />
                <Footer />
              </>
            }
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
