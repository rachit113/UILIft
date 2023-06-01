import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Dashboard, Create } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Lift" >
          <Route path="/Lift/dashboard" element={<Dashboard />}/>
          <Route path="/Lift/create" element={<Create />}/>
          </Route>
          <Route path="/Track Lift/feed" element={<Feed />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
