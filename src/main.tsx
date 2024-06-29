import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { persister, store } from "./redux/store.ts";
import { router } from "./routes/main.routes.tsx";
// import Swiper and modules styles
import { Toaster } from "sonner";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <RouterProvider router={router} />
        <Toaster position="top-center" duration={2000} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
