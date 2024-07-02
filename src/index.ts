import { AVATARS, type Avatar } from "./const.js";

export { AVATARS } from "./const.js";

function hashCode(text: string) {
	let hash = 0;
	if (text.length === 0) return hash;
	for (let i = 0; i < text.length; i++) {
		const chr = text.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0;
	}
	return hash;
}

export function hashAvatar(text: string) {
	const resolvedAddress = typeof text === "string" ? text : "";
	const avatarIndex = Math.abs(
		hashCode(resolvedAddress.toLowerCase()) % AVATARS.length,
	);
	return AVATARS[avatarIndex ?? 0];
}

export function createAvatar(
	text: string,
	options: {
		size: number;
	},
) {
	const avatar = hashAvatar(text);
	return renderAvatarToSvg(avatar, options);
}

export function renderAvatarToSvg(
	avatar: Avatar,
	options: {
		size: number;
	},
) {
	return `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="optimizeSpeed" width="${options.size}" height="${options.size}" style="background-color: ${avatar.color}">
    <text x="0" y="100%" dy="${-(options.size * 0.25)}" font-size=${options.size * 0.75}>${avatar.emoji}</text>
</svg>`;
}
