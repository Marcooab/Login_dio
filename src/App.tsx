import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Feed from "./pages/feed/Feed"

function App() {

  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App
