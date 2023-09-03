<script lang="ts">
	import Nav from '$lib/Navigation/Nav.svelte';
	import WorkInProgressLayout from '$lib/Layouts/WorkInProgressLayout.svelte';
	import EthicsItem from './EthicsItem.svelte';

	import { isFirstLoad } from '$lib/Utilities/firstLoad';
	import { onMount } from 'svelte';

	import Binoculars from '$lib/assets/about/binoculars-shape.svg?component';
	import GirlCoin from '$lib/assets/about/girl-coin-shape.svg?component';
	import Handshake from '$lib/assets/about/handshake-shape.svg?component';

	let shouldTransition = false;
	let isPageLoaded = false;

	onMount(() => {
		isPageLoaded = true;
		shouldTransition = isFirstLoad('about');
	});
</script>

<svelte:head>
	<title>Mădălina Chelaru — About me</title>
</svelte:head>

<Nav {shouldTransition} />
<section class="flex items-center justify-center w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[6.25rem] pt-24 overflow-hidden bg-white">
	{#if isPageLoaded}
		<div class="relative text-display overflow-hidden border-2 border-gray-900 rounded-2xl mx-auto flex flex-col justify-between md:flex-row-reverse gap-10 w-full">
			<p class="text-xl md:text-2xl font-display p-6 self-center max-w-[30rem]">
				I'm currently pursuing a Master's degree in Web Communication Design at SDU, where my primary focus lies in enhancing my expertise in front-end development and value-based design.  Additionally, I'm an active volunteer for C-cube, where I occasionally craft graphic content for social media.
			</p>
			<div class="shrink-0 relative -bottom-24 md:-bottom-36 xl:-bottom-96 -left-10 md:-left-20 xl:-left-44 -mt-20 xl:-mt-64 md:-mr-20 xl:-mr-56 w-[22rem] md:w-[27rem] lg:w-[35rem] xl:w-[55rem] md:rotate-12 md:self-end">
				<img src="about/maddie-image-background.png" alt="Maddie background outline" class="relative top-0 left-0" />
				<img src="about/maddie-image.png" alt="Maddie" class="absolute -top-3 xl:-top-2 left-0 xl:left-5 scale-90 xl:scale-95" />
			</div>
		</div>
	{/if}
</section>
<section class="text-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[6.25rem] bg-white">
	<div class="flex flex-col gap-10 lg:gap-24 bg-gray-900 rounded-2xl py-16 lg:pt-8 lg:pb-36 px-4 md:px-8 lg:px-16">
		<h2 class="flex-1 text-center font-display text-primary px-10 text-5xl md:text-6xl lg:text-[5.25rem] font-bold">My Work Ethics</h2>
		<div class="flex flex-col gap-16">
			<EthicsItem
				title="Details make the whole picture!"
				description="It's not just about placing elements on a canvas; it's about a commitment to precision that ensures every interaction feels intuitive and effortless. I like to get to the nitty gritty of things, be it either user research, product strategies, or product design.">
				<Binoculars
					slot="icon"
					viewBox="0 0 300 217"
					width=""
					height=""
					class="shrink-0 w-[11.25rem] md:w-[12.5rem] lg:w-[15.6rem] xl:w-[18.75rem]" />
			</EthicsItem>
			<EthicsItem
				hasFlexReversed={false}
				title="Remember who I’m serving"
				description="Understanding that users are not just data points or faceless entities, but individuals with unique needs, emotions, and aspirations, forms the cornerstone of my approach. That is why, for projects that have a complexity and target specific user points, I like to dive deep and observe them to make sure I have an unbiased opinion and that I offer valuable solutions for their annoyances.">
				<GirlCoin slot="icon" viewBox="0 0 202 212" width="" height="" class="shrink-0 w-[10rem] md:w-[11.25rem] lg:w-[12.5rem]" />
			</EthicsItem>
			<EthicsItem
				title="Cooperate and co-create"
				description="When different minds converge, each member brings their distinct insights to the table, enriching the design process. I am always open to understand developers or any other team members that help turn UX/UI designs to reality. In fact, I have an interest towards front-end development and am eager to learn how to help in the development process, or how to make developers lives easier :)">
				<Handshake slot="icon" viewBox="0 0 348 179" width="" height="" class="shrink-0 w-[15rem] md:w-[16.25rem] lg:w-[18.75rem] xl:w-[21.6rem]" />
			</EthicsItem>
		</div>
	</div>
</section>
<h3 class="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[6.25rem] py-10 md:py-20 text-center text-gray-900 font-display text-xl md:text-4xl">
	Let's collaborate if you're committed to making<br /> the world a better place.
</h3>
