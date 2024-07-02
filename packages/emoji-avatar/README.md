
<h1 align="center">
<div style="display: flex; justify-content: center; gap: 4px; padding-bottom: 18px; padding-top: 18px;">
  <div style="background: rgb(231, 245, 163); padding: 4px; border-radius: 4px; height: 64px; width: 64px;">
    <img src="  https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f3ae.svg" width="64" height="64">
  </div>
  <div style="background: rgb(191, 176, 248); padding: 4px; border-radius: 9999px; height: 64px; width: 64px;">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f649.svg" alt=":ant:" width="64" height="64">
  </div>
  <div style="background: rgb(252, 251, 202); padding: 4px; border-radius: 24px; height: 64px; width: 64px;">
    <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f403.svg" alt=":ant:" width="64" height="64">
  </div>
</div>
	<sup>Emoji Avatar</sup>
	<br>
	<a href="https://www.npmjs.com/package/emoji-avatar"><img src="https://badgen.net/npm/v/emoji-avatar" title="NPM version"></a> <a href="https://bundlejs.com/?q=emoji-avatar"><img src="https://deno.bundlejs.com/badge?q=emoji-avatar" alt="bundle size"></a>
</h1>

Generate an emoji avatar from a string. [Demo](https://emoji-avatar.pages.dev)

## Getting Started

```bash
npm i emoji-avatar
```

```ts
import { createAvatar } from 'emoji-avatar';

const avatar = createAvatar("john doe")

console.log(avatar)
{
    "color": "hsl(3, 73%, 83%)",
    "url": "https://cdn.../1f368.svg"
}
```

### React Example

```tsx
function UserAvatar({ username }) {
  const avatar = createAvatar(username);
  return (
    <div style={{ background: avatar.color }}>
      <img src={avatar.url} alt={username} />
    </div>
  );
}
```


## API

- `createAvatar(input: string): Avatar`
- `colorHash(hash: number): string`
- `emojiHash(hash: number, emojiRanges?: EmojiRangeName[]): string`

See JSDoc comments in source for details.

## Motivation

Inspired from [Rainbow Wallet](https://github.com/rainbow-me/rainbowkit/blob/dbca8057dc8e5cee224a57bd519b4a61407bc507/packages/rainbowkit/src/components/Avatar/emojiAvatarForAddress.ts)