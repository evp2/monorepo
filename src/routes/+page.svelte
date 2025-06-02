<script>
	import AppSidebar from "$lib/components/app-sidebar.svelte";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";

	let selected = $state("README.md");

	$effect(() => {
		console.log("Selected file:", selected);
	});
</script>

<Sidebar.Provider>
	<AppSidebar bind:ref={selected}/>
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
			<Sidebar.Trigger class="-ml-1" />
			<Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item class="hidden md:block">
						<Breadcrumb.Link href="#">Gallery</Breadcrumb.Link>
					</Breadcrumb.Item>
					{#if selected}
						<Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="#">{selected}</Breadcrumb.Link>
						</Breadcrumb.Item>
					{/if}
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</header>
		<div class="flex flex-1 flex-col gap-4 p-4">
			<div class="grid auto-rows-min gap-4 md:grid-cols-3">
				<div class="bg-muted/50 aspect-video rounded-xl"></div>
				<div class="bg-muted/50 aspect-video rounded-xl"></div>
				<div class="bg-muted/50 aspect-video rounded-xl"></div>
			</div>
			<div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"></div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>

