import { createBoard } from "@wixc3/react-board";
import App from "../../../App";

export default createBoard({
	name: "App",
	Board: () => (
		<div id="root">
			<App />
		</div>
	),
	environmentProps: {
		windowWidth: 678,
	},
});
