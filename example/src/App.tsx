import "./App.css"

import { AVATARS, createAvatar, renderAvatarToSvg } from "../../dist/index.mjs"
import { For } from "solid-js"

const App = () => {
  const svg = () => createAvatar("Hello, World!", { size: 100 })

  return (
    <div class="bg-neutral-900 text-neutral-50 min-h-svh">
      <h1 class="text-3xl font-semibold">Rsbuild with Solid</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div innerHTML={svg()} />

      <AvatarList />
    </div>
  )
}

function AvatarList() {
  return (
    <div class="flex flex-wrap gap-2">
      <For each={AVATARS}>
        {(avatar) => (
          <div
            class="rounded-full overflow-hidden"
            innerHTML={renderAvatarToSvg(avatar, {
              size: 64,
            })}
          />
        )}
      </For>
    </div>
  )
}

export default App
