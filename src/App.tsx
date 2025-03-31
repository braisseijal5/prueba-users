import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage";
import { useBackend } from "./hooks/useBackend";
import { useStore } from "./hooks/useStore";

function App() {
  const { getUsers } = useBackend();
  const { onGetInitialData } = useStore();

  useEffect(() => {
    getUsers().then((res) => {
      onGetInitialData(res);
    });
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
