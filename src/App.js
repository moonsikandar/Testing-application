import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <h1>Testing Application</h1>

          <Navbar />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
