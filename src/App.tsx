import { SumAssuredProvider } from "./contexts/sureAmount/sumAssuredProvider";
import AppRoutes from "./router/routerRoot";

function App() {
  return (
    <SumAssuredProvider>
      <AppRoutes />
    </SumAssuredProvider>
  );
}

export default App;
