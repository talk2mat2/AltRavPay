import { useEffect, useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import initialTheme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: no declaration file for module 'redux-persist/integration/react'
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes";

const queryClient = new QueryClient();

function App() {
  const [currentTheme] = useState(initialTheme);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={currentTheme}>
              <AppRoutes />
              <Toaster
                toastOptions={{ style: { fontWeight: "500" }, duration: 7000 }}
              />
            </ChakraProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
