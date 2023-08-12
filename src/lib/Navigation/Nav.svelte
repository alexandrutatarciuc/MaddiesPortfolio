<script lang="ts">
	import NavItem from './NavItem.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let isFixed: boolean = false;
	export let shouldTransition: boolean = true;

	$: options = {y: shouldTransition ? -100 : 0}

	let isLoaded = false;
	onMount(() => (isLoaded = true));
</script>

{#if isLoaded}
	<nav
		transition:fly={options}
		class="{isFixed
			? 'fixed'
			: 'absolute'} top-0 left-1/2 transform -translate-x-1/2 flex items-center gap-auto lg:gap-6 justify-between max-w-sm lg:max-w-lg my-4 mx-auto py-2 px-4 sm:px-6 rounded-full">
		<span class="absolute -inset-[2px] border-2 border-gray-900 rounded-full backdrop-blur-lg">
			<span class="absolute rounded-full inset-0 bg-white opacity-50" />
		</span>
		<NavItem href="/" label="Projects" />
		<NavItem href="/cv" label="CV" />
		<NavItem href="/about" label="About Me" />
	</nav>
{/if}
