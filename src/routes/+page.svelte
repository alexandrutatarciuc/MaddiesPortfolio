<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import Nav from '$lib/Navigation/Nav.svelte';

	import { cubicInOut, backInOut, backOut, elasticInOut, elasticOut, elasticIn } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	function isFirstLoad(): boolean {
		const key = 'hasLoadedBefore';
		const hasLoadedBefore = sessionStorage.getItem(key);

		if (hasLoadedBefore === null) {
			sessionStorage.setItem(key, 'true');
			return true;
		}

		return false;
	}

	let shouldTransition = false;
	let isPageLoaded = false;

	onMount(() => {
		isPageLoaded = true;
		shouldTransition = isFirstLoad();
	});

	let globalDelay = 150;

	function spin(node: any, { duration = 5000, easing = elasticOut, times = 1, delay = globalDelay } = {}) {
		return {
			duration,
			easing,
			delay,
			css: (t: number) => {
				const degrees = 360 * times * t;
				return `transform: scale(${t}) rotate(${degrees}deg);`;
			}
		};
	}

	let isSectionVisible = false;

	function handleEnterView(): void {
		isSectionVisible = true;
	}

	type Trait = {
		name: string;
		isVisible: boolean;
	};

	const traits: Trait[] = [
		{ name: 'challenging', isVisible: false },
		{ name: 'creative', isVisible: false },
		{ name: 'analytical', isVisible: false },
		{ name: 'collaborative', isVisible: false }
	];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Nav {shouldTransition} />
<section class="flex items-center justify-center w-full min-h-screen px-6 py-24 overflow-hidden bg-white sm:px-8 md:px-15 lg:px-auto">
	{#if isPageLoaded}
		<div class="relative">
			<div
				transition:fade={{ delay: globalDelay }}
				class="text-display border-2 border-gray-900 rounded-2xl mx-auto px-4 sm:px-8 md:px-10 lg:px-15 py-12 sm:py-19 flex flex-col gap-10 max-w-[70rem] hi-section">
				<h1 class="font-display text-center font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[5.25rem] lg:leading-none xl:text-8xl">
					Hi, I'm Maddie!
					<br />
					<div class="sm:mt-5">
						A <div class="inline-block relative">
							<button
								class="relative inline-block bg-button text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl outline-offset-[-6px] sm:outline-offset-[-8px] lg:outline-offset-[-10px] xl:outline-offset-[-14px] inline-tag p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 rounded-full ml-1 mr-3 lg:ml-2 lg:mr-6
					transform -rotate-6 hover:rotate-6 transition-transform">
								UX/UI
							</button>
						</div>

						Designer.
					</div>
				</h1>
				<p class="text-xl text-center md:text-2xl font-display font-500">
					My purpose is to give voice to overlooked perspectives, fostering meaningful connections and inclusivity. I channel my skills to support
					those with meaningful projects, ensuring their visions reach a wider audience.
				</p>
			</div>
			<!-- Eye-shape -->
			<svg
				transition:scale={{ easing: elasticOut, duration: 2000, delay: globalDelay }}
				class="absolute -translate-y-1/2 translate-x-1/2 right-0 top-36 max-h-[3.5rem] sm:max-h-[5.75rem] xl:max-h-[6.75rem] shape-shadow transition-transform ease-in-out duration-500 hover:-rotate-[30deg]"
				viewBox="0 0 195 112"
				fill="none"
				xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet">
				<path
					d="M185.426 91.6802C164.144 102.289 123.058 118.151 83.7364 107.425C44.4146 96.6995 17.0737 62.1725 4.12569 42.2273C-0.776596 34.6757 1.8513 25.0416 9.90896 21.0251C31.191 10.4168 72.2765 -5.44576 111.598 5.27998C150.92 16.0057 178.261 50.5328 191.209 70.4778C196.111 78.0294 193.483 87.6636 185.426 91.6802ZM87.5014 93.6225C108.085 99.2371 129.323 87.1024 134.937 66.5185C140.552 45.935 128.417 24.6972 107.833 19.0826C87.2499 13.4681 66.0122 25.6029 60.3977 46.1864C54.783 66.7704 66.9178 88.008 87.5014 93.6225Z"
					fill="#F7AEF8"
					stroke="#111111"
					stroke-width="2" />
			</svg>
			<!-- Flower shape -->
			<svg
				transition:spin
				class="absolute -top-14 sm:-top-28 w-auto max-h-[6rem] sm:max-h-[12rem] shape-shadow transition-transform ease-in-out duration-1000 hover:rotate-[360deg]"
				viewBox="0 0 295 295"
				fill="none"
				xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet">
				<path
					d="M109.638 168.731L110.239 167.514L108.898 167.301C68.3194 160.872 40.0996 149.413 22.878 137.048C5.58026 124.628 -0.327463 111.553 2.77089 101.817C5.86936 92.0794 18.2493 84.8162 39.5481 84.6613C60.7531 84.507 90.4119 91.4407 127.251 109.613L128.468 110.214L128.681 108.873C135.108 68.3014 146.568 40.0866 158.935 22.8682C171.357 5.57381 184.434 -0.333036 194.173 2.76481C203.913 5.86273 211.178 18.2402 211.332 39.534C211.486 60.7343 204.55 90.3862 186.371 127.216L185.77 128.433L187.111 128.646C227.664 135.093 255.866 146.566 273.076 158.942C290.362 171.373 296.266 184.455 293.169 194.195C290.072 203.934 277.699 211.195 256.414 211.342C235.222 211.488 205.582 204.541 168.767 186.348L167.549 185.746L167.336 187.088C160.907 227.656 149.446 255.869 137.078 273.087C124.656 290.38 111.579 296.287 101.839 293.189C92.0998 290.091 84.835 277.714 84.6801 256.419C84.5258 235.218 91.461 205.565 109.638 168.731ZM161.574 174.245C176.076 166.742 181.749 148.903 174.246 134.401C166.742 119.899 148.903 114.225 134.401 121.729C119.899 129.232 114.226 147.071 121.729 161.573C129.232 176.075 147.072 181.749 161.574 174.245Z"
					fill="#F7AEF8"
					stroke="#111111"
					stroke-width="2" />
			</svg>
			<!-- Small cloud shape -->
			<svg
				transition:spin={{ duration: 1000, easing: backOut }}
				class="absolute -bottom-14 sm:-bottom-24 -left-12 sm:-left-28 max-h-[6.25rem] sm:max-h-[10.5rem] shape-shadow transition-transform ease-in-out duration-1000 hover:rotate-[360deg]"
				viewBox="0 0 228 228"
				fill="none"
				xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet">
				<path
					d="M45.6865 93.4472L46.5728 92.984L46.1096 92.0977L37.0929 74.8458C24.277 50.3244 33.7661 20.0565 58.2875 7.24047C82.8089 -5.57552 113.077 3.9136 125.893 28.435L134.909 45.6869L135.373 46.5732L136.259 46.11L153.511 37.0934C178.032 24.2774 208.3 33.7665 221.116 58.2879C233.932 82.8093 224.443 113.077 199.922 125.893L182.67 134.91L181.783 135.373L182.247 136.259L191.263 153.511C204.079 178.033 194.59 208.301 170.069 221.117C145.547 233.933 115.279 224.443 102.463 199.922L93.4467 182.67L92.9835 181.784L92.0973 182.247L74.8454 191.264C50.324 204.08 20.056 194.591 7.24005 170.069C-5.57594 145.548 3.91319 115.28 28.4346 102.464L45.6865 93.4472Z"
					fill="#F7AEF8"
					stroke="#111111"
					stroke-width="2" />
			</svg>
		</div>
	{/if}
</section>

<section use:inview={{ unobserveOnEnter: true, rootMargin: '-30%' }} on:inview_enter={handleEnterView} class="min-h-screen">
	{#if isSectionVisible}
		<div
			in:fade
			class="min-h-screen w-full bg-button px-6 sm:px-8 md:px-15 xl:px-[6.25rem] py-20 sm:py-30 xl:py-[8.75rem] flex flex-col justify-center gap-16">
			<p class="text-2xl font-medium text-white font-display sm:text-4xl">I am looking forward to jobs that are...</p>
			<div class="flex flex-col gap-6 sm:gap-8 font-display text-4xl sm:text-6xl md:text-[5.25rem] xl:text-8xl text-primary font-bold">
				{#each traits as trait}
					<div use:inview={{ unobserveOnEnter: true, rootMargin: '-150px' }} on:inview_enter={() => (trait.isVisible = true)}>
						{#if trait.isVisible}
							<p in:fly={{ y: 400, duration: 700, easing: cubicInOut }}>
								{trait.name}
							</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	{/if}
</section>

<section class="bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[6.25rem] py-20 md:py-36">
	<h2 class="font-display text-4xl sm:text-6xl xl:text-[5.25rem] text-gray-900 mb-10 text-center font-semibold">Projects</h2>
	<div class="grid grid-rows-3 auto-rows-min gap-16">
		<ProjectCard
			imgUrl="/projects/c-cube/c-cube-project-cover-preview.png"
			projectUrl="c-cube"
			title="C-Cube"
			tags="UX/UI | Branding | Web Development" />
		<ProjectCard
			imgUrl="/projects/audiophile/audiophile-project-cover.webp"
			projectUrl="audiophile"
			title="Audiophile App"
			tags="Concept Development | UX | App Design" />
		<ProjectCard
			imgUrl="/projects/my-coffee-impact/my-coffee-impact-project-cover-preview.png"
			projectUrl="coffee-impact"
			title="My Coffee Impact Platform"
			tags="Gamification | Website Design" />
	</div>
</section>

<style lang="postcss">
	.inline-tag {
		outline: 2px solid theme(colors.gray.900);
		box-shadow: 3px 4px 0px 0px theme(colors.gray.900);
		-webkit-box-shadow: 3px 4px 0px 0px theme(colors.gray.900);
		-moz-box-shadow: 3px 4px 0px 0px theme(colors.gray.900);

		@screen lg {
			box-shadow: 9px 10px 0px 0px theme(colors.gray.900);
			-webkit-box-shadow: 9px 10px 0px 0px theme(colors.gray.900);
			-moz-box-shadow: 9px 10px 0px 0px theme(colors.gray.900);
		}

		@screen md {
			box-shadow: 5px 6px 0px 0px theme(colors.gray.900);
			-webkit-box-shadow: 5px 6px 0px 0px theme(colors.gray.900);
			-moz-box-shadow: 5px 6px 0px 0px theme(colors.gray.900);
		}
	}

	.inline-tag:active {
		box-shadow: 1px 2px 0px 0px theme(colors.gray.900);
		top: 4px;
		left: 3px;
	}

	.hi-section {
		box-shadow: 8px 9px 0px 0px theme(colors.button);
		-webkit-box-shadow: 8px 9px 0px 0px theme(colors.button);
		-moz-box-shadow: 8px 9px 0px 0px theme(colors.button);

		@screen md {
			box-shadow: 10px 11px 0px 0px theme(colors.button);
			-webkit-box-shadow: 10px 11px 0px 0px theme(colors.button);
			-moz-box-shadow: 10px 11px 0px 0px theme(colors.button);
		}

		@screen xl {
			box-shadow: 19px 20px 0px 0px theme(colors.button);
			-webkit-box-shadow: 19px 20px 0px 0px theme(colors.button);
			-moz-box-shadow: 19px 20px 0px 0px theme(colors.button);
		}
	}
</style>
