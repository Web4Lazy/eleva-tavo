import { createRoot } from "react-dom/client";

// Self-hosted fonts (GDPR: bundled via @fontsource, no Google Fonts CDN request).
// Poppins = UI/titoli; Playfair Display italic = citazioni.
// Solo subset latin + latin-ext (italiano): niente cyrillic/devanagari nel bundle.
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/poppins/latin-800.css";
import "@fontsource/poppins/latin-ext-400.css";
import "@fontsource/poppins/latin-ext-600.css";
import "@fontsource/poppins/latin-ext-700.css";
import "@fontsource/poppins/latin-400-italic.css";
import "@fontsource/poppins/latin-ext-400-italic.css";
import "@fontsource/playfair-display/latin-400-italic.css";
import "@fontsource/playfair-display/latin-600-italic.css";
import "@fontsource/playfair-display/latin-ext-400-italic.css";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
