import { Suspense } from "react";
import Loading from "../Loading";
import Router from "../Routes/router/router";
import { AuthProvider } from "./context";

export function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </AuthProvider>
  );
}

export default App;
