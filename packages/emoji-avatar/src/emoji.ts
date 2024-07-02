export type EmojiRange = {
	start: number;
	end: number;
};

export const EmojiRanges: { [key: string]: EmojiRange } = {
	emoticons: { start: 0x1f600, end: 0x1f64f },
	animals: { start: 0x1f400, end: 0x1f4d3 },
	foodAndDrink: { start: 0x1f32d, end: 0x1f37f },
	travelAndPlaces: { start: 0x1f3e0, end: 0x1f3f0 },
	activities: { start: 0x1f3a0, end: 0x1f3d3 },
};
export const EMOJI_RANGES = Object.keys(EmojiRanges);
export const TOTAL_EMOJI_RANGE = EMOJI_RANGES.reduce((sum, rangeName) => {
	const range = EmojiRanges[rangeName];
	return sum + (range.end - range.start + 1);
}, 0);

export function getEmojiUrl(code: string) {
	return `https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${code}.svg`;
}
