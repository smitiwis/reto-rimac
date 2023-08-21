import { AmountProvider } from "./contexts/amount/amountProvider";
import { FormHomeProvider } from "./contexts/formHome/formHomeProvider";
import AppRoutes from "./router/routerRoot";

function App() {
  return (
    <AmountProvider>
      <FormHomeProvider>
        <AppRoutes />
      </FormHomeProvider>
    </AmountProvider>
  );
}

export default App;
