import { AmountProvider } from "./contexts/sureAmount/sureAmountProvider";
import AppRoutes from "./router/routerRoot";

function App() {
  return (
    <AmountProvider>
      <AppRoutes />
    </AmountProvider>
  );
}

export default App;
