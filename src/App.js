import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import HappyBirthday from "./views/happy-brithday";
import HomePage from "./views/home-page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/happy-birthday" element={<HappyBirthday />} exact />
          <Route path="/home" element={<HomePage />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
