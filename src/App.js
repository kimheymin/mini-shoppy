import { Outlet } from "react-router";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClientProvider, QueryClient } from "react-query";
import Navbar from "./components/header/Navbar";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Navbar />
          <Outlet />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
