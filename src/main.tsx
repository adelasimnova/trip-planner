import * as React from "react";
import ReactDOM from "react-dom/client";
import { TripPlannerForm } from "./components/trip-planner-page/trip-planner-form/TripPlannerForm";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TripPlannerForm />
  </React.StrictMode>,
);
