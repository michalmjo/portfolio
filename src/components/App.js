import "../styles/App.scss";
import Menu from "./Menu";
import MouseElement from "../Elements/MouseElement";
import Mountian from "./Mountian";
import Pages from "./Pages";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MouseElement />
      <Routes>
        <Route path="/" element={<Mountian direction="reset" />}></Route>
        <Route
          path="/contact"
          element={<Mountian direction="change" />}
        ></Route>
        <Route path="*" element={<Mountian direction="hidden" />}></Route>
      </Routes>
      <div className="App">
        <Menu />
        <Pages />
      </div>
    </>
  );
}

export default App;
