import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { Providers } from "./components/providers";

export function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
