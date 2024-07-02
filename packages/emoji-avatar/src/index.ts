import {
	EMOJI_RANGES,
	EmojiRanges,
	TOTAL_EMOJI_RANGE,
	getEmojiUrl,
	type EmojiRangeName,
} from "./emoji.js";
import { hex } from "./encode.js";

export type { EmojiRangeName };

/**
 * Represents an avatar with a background color and emoji URL.
 */
export type Avatar = {
	/** The background color for the avatar */
	color: string;
	/** The URL of the emoji SVG */
	url: string;
};

/**
 * Creates an avatar based on the input string.
 * @param {string} input - The input string to generate the avatar from (e.g.username, email).
 * @returns {Avatar} An avatar
 */
export function createAvatar(input: string): Avatar {
	const hash = djb2Hash(input);
	const code = emojiHash(hash);
	const color = colorHash(hash);
	return {
		color,
		url: getEmojiUrl(code),
	};
}

/**
 * Generates a HSL color based on the hash.
 */
export function colorHash(hash: number): string {
	const hue = hash % 360;
	const saturation = 70 + (hash % 20); // 70-90%
	const lightness = 80 + (hash % 10); // 80-90%
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

/**
 * Selects an emoji based on the input hash.
 * @param {number} hash - The hash to select the emoji from.
 * @param {EmojiRangeName[]} [emojiRanges] - The emoji ranges to select from (default: all)
 * @returns {string} The emoji hex code
 */
export function emojiHash(
	hash: number,
	emojiRanges?: EmojiRangeName[],
): string {
	// Calculate total range size
	let totalRange: number | undefined;
	if (emojiRanges) {
		totalRange = 0;
		for (const rangeName of emojiRanges) {
			const range = EmojiRanges[rangeName];
			totalRange += range.end - range.start + 1;
		}
	} else {
		totalRange = TOTAL_EMOJI_RANGE;
	}
	const ranges = emojiRanges ?? EMOJI_RANGES;

	// Map the hash to the combined emoji ranges
	let emojiCode = hash % totalRange;

	// Find the correct range and emoji
	for (const name of ranges) {
		const range = EmojiRanges[name];
		const rangeSize = range.end - range.start + 1;

		if (emojiCode < rangeSize) {
			const code = range.start + emojiCode;
			return hex(code);
		}

		emojiCode -= rangeSize;
	}

	// This should never happen if ranges are properly defined
	throw new Error("Unable to find emoji in specified ranges");
}

function djb2Hash(input: string) {
	let hash = 0;
	for (let i = 0; i < input.length; i++) {
		const char = input.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash |= 0; // Convert to 32-bit integer
	}
	return Math.abs(hash);
}
