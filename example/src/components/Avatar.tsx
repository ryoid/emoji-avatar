import cn from "clsx";
import type { Avatar } from "emoji-avatar";
import { splitProps, type ComponentProps } from "solid-js";

type Props = Omit<ComponentProps<"img">, "src" | "srcset" | "classList"> & {
	avatar: Avatar;
	imageClass?: string;
};

export function EmojiAvatar(props: Props) {
	const [local, others] = splitProps(props, ["avatar", "class", "imageClass"]);
	return (
		<div
			class={cn("overflow-hidden p-1.5 select-none", local.class)}
			style={{ background: local.avatar.color }}
		>
			{/* biome-ignore lint/a11y/useAltText: <explanation> */}
			<img src={local.avatar.url} class={local.imageClass} {...others} />
		</div>
	);
}
