import { Header } from "./components/header/Header";
import { NavBar } from "./components/header/NavBar";
import AppRoutes from "./router/routerRoot";

function App() {
  return (
    <div className="bg-gray">
      <Header />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
