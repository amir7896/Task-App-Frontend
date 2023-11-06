import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StateProvider } from "./hooks/StateContext";
import Routing from "./routing/Routing";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StateProvider>
        <Routing />
      </StateProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;
