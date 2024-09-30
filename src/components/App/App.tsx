import { Suspense } from "react";
import Loading from "../Loading/Loading";
import Router from "../Routes/router/router";
import { AuthProvider } from "./context";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </AuthProvider>
  );
}

export default App;
