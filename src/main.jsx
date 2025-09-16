import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./containers/Home";
import globalStyles from "./styles/globalStyles";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<globalStyles />
		<Home />
	</StrictMode>,
);
