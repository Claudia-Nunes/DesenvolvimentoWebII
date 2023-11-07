import { Provider } from "./contexts";
import Rotas from "./Routes";
//import Principal from "./pages/Principal";


export default function App() {
  return (
    <Provider>
      <Rotas />
    </Provider>
  );
}