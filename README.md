<h1 align="center">
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

## Development

```sh
pnpm install
```


```sh
pnpm --filter emoji-avatar dev
```

```sh
pnpm --filter example dev
```

## 

Inspired from Rainbow Wallet https://github.com/rainbow-me/rainbowkit/blob/dbca8057dc8e5cee224a57bd519b4a61407bc507/packages/rainbowkit/src/components/Avatar/emojiAvatarForAddress.ts