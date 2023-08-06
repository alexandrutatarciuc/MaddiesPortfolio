<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails } from 'svelte-inview';

	export let src: string;
	export let poster: string;

    function videoPlayer(video: HTMLVideoElement) {
		function togglePlayPause() {
			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}
		}

		video.addEventListener('click', togglePlayPause);

		return {
			// Cleanup: remove the event listener when the element is destroyed
			destroy() {
				video.removeEventListener('click', togglePlayPause);
			}
		};
	}

	function handleEnter(event: CustomEvent<ObserverEventDetails>) {
		const video = event.target as HTMLVideoElement;
		video.play();
	}

	function handleLeave(event: CustomEvent<ObserverEventDetails>) {
		const video = event.target as HTMLVideoElement;
		video.pause();
	}
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
	use:videoPlayer
	use:inview
	on:inview_enter={handleEnter}
	on:inview_leave={handleLeave}
	{src}
    {poster}
	class="max-h-[40rem] project-video"
	loop
	muted
	playsinline />

<style lang="postcss">
	video.project-video::-webkit-media-controls {
		display: none !important;
	}
</style>
