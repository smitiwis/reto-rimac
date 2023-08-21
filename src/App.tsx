import { AmountProvider } from "./contexts/amount/amountProvider";
import { UserDataProvider } from "./contexts/userData/userDataProvider";
import AppRoutes from "./router/routerRoot";

function App() {
  return (
    <AmountProvider>
      <UserDataProvider>
        <AppRoutes />
      </UserDataProvider>
    </AmountProvider>
  );
}

export default App;
