import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./components/MenuItem";

const root = createRoot(document.querySelector('#root'))

root.render(<MenuItem text="kontakt" url="/contact/"/>)