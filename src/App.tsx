import { NavBar } from "./components/navbar/NavBar";
import AppRoutes from "./router/routerRoot";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
