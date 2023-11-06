import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
