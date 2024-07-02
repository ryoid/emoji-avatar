import {
	EMOJI_RANGES,
	EmojiRanges,
	TOTAL_EMOJI_RANGE,
	getEmojiUrl,
} from "./emoji.js";
import { hex } from "./encode.js";

export function createAvatar(input: string) {
	const hash = djb2Hash(input);
	const code = emojiHash(hash);
	const color = colorHash(hash);
	return {
		color,
		url: getEmojiUrl(code),
	};
}
export type Avatar = ReturnType<typeof createAvatar>;

export function colorHash(hash: number): string {
	const hue = hash % 360;
	const saturation = 70 + (hash % 20); // 70-90%
	const lightness = 80 + (hash % 10); // 80-90%
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export function emojiHash(hash: number, emojiRanges?: string[]): string {
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
