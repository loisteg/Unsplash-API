import Header from "./components/Header/Header";
import SetContent from "./components/SetContent";
import ListImages from "./components/ListImages/ListImages";
import SingleImage from "./components/SingleImage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<SetContent Component={ListImages} dataType={"list"} />}
        ></Route>
        <Route
          path="/:id"
          element={<SetContent Component={SingleImage} dataType={"image"} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
