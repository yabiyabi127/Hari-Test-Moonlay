import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Crud from "./pages/Crud";
import Starships from "./pages/Startships";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<People />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/crud" element={<Crud />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
