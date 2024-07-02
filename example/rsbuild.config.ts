import { defineConfig } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginSolid } from "@rsbuild/plugin-solid";

export default defineConfig({
	html: {
		title: "Emoji Avatar",
		meta: {
			description: "Generate emoji avatars from a string.",
		},
	},
	plugins: [
		pluginBabel({
			include: /\.(?:jsx|tsx)$/,
			exclude: /[\\/]node_modules[\\/]/,
		}),
		pluginSolid(),
	],
});
