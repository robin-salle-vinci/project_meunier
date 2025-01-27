import { ProviderWrapper  } from "../../contexts/AppContext.jsx";
import App from "./App.jsx";

const AppLoader= () => {
  return (
    <ProviderWrapper >
        <App />
    </ProviderWrapper >
  )
}

export default AppLoader