import { Suspense } from "react";
import Loading from "../Loading/Loading";
import Router from "../../utils/router/router";

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Router />
    </Suspense>
  );
}

export default App;

