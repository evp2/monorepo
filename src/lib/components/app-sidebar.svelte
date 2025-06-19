<script>
	import * as Collapsible from "$lib/components/ui/collapsible/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
	import FileIcon from "@lucide/svelte/icons/file";
	import FolderIcon from "@lucide/svelte/icons/folder";
	let { ref = $bindable("Home"), ...restProps } = $props();

	const data = {
		changes: [
			{
				file: "Home",
				state: "...",
			},
			{
				file: "About",
				state: "...",
			},
			{
				file: "Preferences",
				state: "...",
			},
		],
		tree: [
			["lib", ["components", "button.svelte", "card.svelte"], "utils.ts"],
			[
				"routes",
				["hello", "+page.svelte", "+page.ts"],
				"+page.svelte",
				"+page.server.ts",
				"+layout.svelte",
			],
			["static", "favicon.ico", "svelte.svg"],
			"eslint.config.js",
			".gitignore",
			"svelte.config.js",
			"tailwind.config.js",
			"package.json",
			"README.md",
		],
	};
</script>


<Sidebar.Root {...restProps}>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Greetings</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each data.changes as item, index (index)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								isActive={item.file === ref}
								class="data-[active=true]:bg-transparent data-[active=true]:font-bold"
								onclick={() => ref = item.file}
							>
								<FileIcon />
								{item.file}
							</Sidebar.MenuButton>
							<Sidebar.MenuBadge>{item.state}</Sidebar.MenuBadge>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					<!--{#each data.tree as item, index (index)}-->
					<!--	{@render Tree({ item })}-->
					<!--{/each}-->
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>

{#snippet Tree({ item })}
	{@const [name, ...items] = Array.isArray(item) ? item : [item]}
	{#if !items.length}
		<Sidebar.MenuButton
			isActive={name === ref}
			class="data-[active=true]:bg-transparent data-[active=true]:font-bold"
			onclick={() => ref = name}
		>
			<FileIcon />
			{name}
		</Sidebar.MenuButton>
	{:else}
		<Sidebar.MenuItem>
			<Collapsible.Root
				class="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
				open={name === "lib" || name === "components"}
			>
				<Collapsible.Trigger>
					{#snippet child({ props })}
						<Sidebar.MenuButton {...props}>
							<ChevronRightIcon className="transition-transform" />
							<FolderIcon />
							{name}
						</Sidebar.MenuButton>
					{/snippet}
				</Collapsible.Trigger>
				<Collapsible.Content>
					<Sidebar.MenuSub>
						{#each items as subItem, index (index)}
							{@render Tree({ item: subItem })}
						{/each}
					</Sidebar.MenuSub>
				</Collapsible.Content>
			</Collapsible.Root>
		</Sidebar.MenuItem>
	{/if}
{/snippet}