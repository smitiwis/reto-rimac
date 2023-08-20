import { AmountProvider } from "./contexts/amount/amountProvider";
import AppRoutes from "./router/routerRoot";

function App() {
  return (
    <AmountProvider>
      <AppRoutes />
    </AmountProvider>
  );
}

export default App;
