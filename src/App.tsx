import { SureProvider } from "./contexts/sureAmount/sureProvider";
import AppRoutes from "./router/routerRoot";

function App() {
  return (
    <SureProvider>
      <AppRoutes />
    </SureProvider>
  );
}

export default App;
