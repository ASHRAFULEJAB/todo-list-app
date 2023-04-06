import "./App.css";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import router from "./routes/Routes";

function App() {
  const BASE_URL = "http://localhost:5000";

  return (
    <RouterProvider router={router}>
      <Toaster />
    </RouterProvider>
  );
}

export default App;
