import { BrowserRouter,Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Projects from "./pages/Projects"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import About from "./pages/About"
import SignUp from "./pages/SignUp"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  )
}