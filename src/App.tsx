import { Header } from "./components/header/Header";
import AppRoutes from "./router/routerRoot";

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
