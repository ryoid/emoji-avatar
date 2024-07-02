import "./styles/index.css";

import { For, Show, createSignal } from "solid-js";
import { createAvatar } from "emoji-avatar";
import { EmojiAvatar } from "./components/Avatar";

const App = () => {
	const [text, setText] = createSignal<string>("");
	const avatar = () => {
		const t = text();
		if (t == null) return;
		console.log(createAvatar(t));
		return createAvatar(t);
	};
	const otherAvatars = () => {
		return new Array(5).fill(0).map((_, i) => {
			const input = `${-1}${i}${Date.now()}`;
			const avatar = createAvatar(input);
			return {
				input,
				...avatar,
			};
		});
	};

	return (
		<div class="bg-neutral-900 text-neutral-50 min-h-svh">
			<main class="container flex items-center justify-center mx-auto flex-col py-24">
				<AvatarList index={0} count={1} />
				<AvatarList index={1} count={2} />
				<AvatarList index={2} count={3} />
				<AvatarList index={3} count={4} />
				<AvatarList index={4} count={5} />
				<h1 class="text-4xl font-semibold pt-4 pb-8">Emoji Avatar</h1>

				<div>
					<label>
						<div class="pb-2 font-medium text-sm">Unique Identifier</div>
						<input
							class="flex h-10 w-full rounded border border-neutral-700 border-input bg-black/50 px-3 py-2 ring-offset-neutral-900 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							type="text"
							onInput={(e) => setText(e.currentTarget.value)}
							value={text()}
							placeholder="Ryan"
						/>
					</label>
				</div>

				<div class="mt-8">
					<Show
						when={avatar()}
						fallback={
							<div class="flex items-center justify-center h-full text-neutral-400" />
						}
					>
						{(avatar) => (
							<div class="flex flex-col items-center">
								<div class="flex gap-1">
									<EmojiAvatar class="rounded size-32" avatar={avatar()} />
									<div class="flex flex-col gap-2">
										<div class="flex gap-1">
											<EmojiAvatar
												class="rounded-full size-16"
												avatar={avatar()}
											/>
											<EmojiAvatar
												class="rounded-full size-16"
												avatar={avatar()}
											/>
										</div>
										<div class="flex justify-end -space-x-4 *:ring *:ring-neutral-900">
											<EmojiAvatar
												class="rounded-full size-12 z-40"
												avatar={avatar()}
											/>
											<EmojiAvatar
												class="rounded-full size-12 z-30"
												avatar={otherAvatars()[0]}
											/>
											<EmojiAvatar
												class="rounded-full size-12 z-20"
												avatar={avatar()}
											/>
											<EmojiAvatar
												class="rounded-full size-12 z-10"
												avatar={otherAvatars()[2]}
											/>
										</div>
									</div>
								</div>
								<div class="z-0 flex items-center -space-x-2 *:ring *:ring-neutral-900 mt-4">
									<EmojiAvatar
										class="rounded-full z-0 size-8"
										avatar={otherAvatars()[0]}
									/>
									<EmojiAvatar
										class="rounded-full z-10 size-10"
										avatar={otherAvatars()[1]}
									/>
									<EmojiAvatar
										class="rounded-full z-20 size-14"
										avatar={avatar()}
									/>
									<EmojiAvatar
										class="rounded-full z-10 size-10"
										avatar={otherAvatars()[2]}
									/>
									<EmojiAvatar
										class="rounded-full z-0 size-8"
										avatar={otherAvatars()[3]}
									/>
								</div>
							</div>
						)}
					</Show>
				</div>
			</main>
		</div>
	);
};

function AvatarList(props: { index: number; count: number }) {
	const createdTime = Date.now();
	const [trigger, setTrigger] = createSignal(0);
	const avatars = () => {
		return new Array(props.count).fill(0).map((_, i) => {
			const input = `${props.index}${i}${trigger()}${createdTime}`;
			const avatar = createAvatar(input);
			return {
				input,
				...avatar,
			};
		});
	};

	return (
		<div class="flex flex-wrap gap-1.5">
			<For each={avatars()}>
				{(avatar) => (
					<button
						type="button"
						class="hover:scale-110 transform transition-transform duration-200 ease-in-out"
						onClick={() => {
							setTrigger(trigger() + 1);
						}}
					>
						<EmojiAvatar
							class="rounded-full size-8"
							title={avatar.input}
							avatar={avatar}
						/>
					</button>
				)}
			</For>
		</div>
	);
}

export default App;
