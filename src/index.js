import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on Browser -------------------------------------
const rootElement = document.querySelector("#root"); // Selecting the DOM element with the ID "root"

// Throwing an error if the root element is not found
if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement); // Creating a root for rendering the React component

root.render(<MainContent />); // Rendering the MainContent component inside the root element
