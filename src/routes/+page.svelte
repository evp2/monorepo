<script>
	import AppSidebar from "$lib/components/app-sidebar.svelte";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { Button } from "$lib/components/ui/button/index.js";

	let selected = $state("Home");

	function handleContact() {
		window.location.href = "mailto:your.email@example.com";
	}
</script>

<Sidebar.Provider>
	<AppSidebar bind:ref={selected}/>
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white/80 backdrop-blur-md shadow-sm">
			<Sidebar.Trigger class="-ml-1" />
			<Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="#">
								{selected}
							</Breadcrumb.Link>
					</Breadcrumb.Item>
		

				</Breadcrumb.List>
			</Breadcrumb.Root>
		</header>
		<main class="flex flex-1 flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-blue-100 min-h-[80vh]">
			<section class="max-w-2xl w-full text-center py-16 px-6 rounded-2xl shadow-lg bg-white/90 border border-gray-200">
				<h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Hi, I'm Evan</h1>
				<h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Freelance Software Engineer</h2>
				<p class="text-gray-700 mb-8 text-lg md:text-xl">
					Full Stack Web and Cloud
				</p>
				<Button class="px-8 py-3 text-lg font-semibold rounded-full shadow-md bg-black hover:bg-gray-800 text-white transition-colors" on:click={handleContact}>
					Contact Me
				</Button>
			</section>
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>

