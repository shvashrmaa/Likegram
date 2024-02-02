import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Authentication from "./screens/Authentication";

function App() {
  return (
    <section className="w-[100vw] h-[100vh] bg-white flex flex-col items-center overflow-scroll scrollbar-hide justify-center">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/auth" Component={Authentication} />
      </Routes>
    </section>
  );
}

export default App;
