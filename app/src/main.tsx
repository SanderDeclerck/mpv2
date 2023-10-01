import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "@tanstack/react-router";
import { router } from "./domains/app/router";

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
