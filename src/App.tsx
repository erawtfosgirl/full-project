import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Layout from "./pages/Layout"
import About from "./pages/About"
import Products from "./pages/Products"

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
