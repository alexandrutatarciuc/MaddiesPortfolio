<script lang="ts">
	import BigStar from '$lib/assets/projects/audiophile/audiophile-project-shape-1.svg?component';
	import NinjaStar from '$lib/assets/projects/audiophile/audiophile-project-shape-2.svg?component';
	import SmallStar from '$lib/assets/projects/audiophile/audiophile-project-shape-3.svg?component';
	import QuestionMark from '$lib/assets/projects/audiophile/audiophile-project-shape-question-mark.svg?component';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails } from 'svelte-inview';

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

<div class="flex flex-col bg-white font-figtree">
	<img src="audiophile/audiophile-project-cover.png" class="min-h-[40rem] object-cover" alt="Audiophile Project Cover" />
	<div class="flex items-center justify-center px-6 py-20 font-semibold text-center text-gray-900 bg-white font-display">
		<p class="text-5xl">Tapping into the HiFi purchase dilemmas.</p>
	</div>
	<section class="flex flex-col gap-10 px-6 py-16 text-xl font-medium text-white bg-gray-900">
		<div class="grid grid-flow-row grid-cols-2 gap-16 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
			<div class="flex flex-col gap-4">
				<p class="font-bold">Client</p>
				<p>Audiophile.dk</p>
			</div>
			<div class="flex flex-col gap-4">
				<p class="font-bold">Year</p>
				<p>2022</p>
			</div>
			<div class="flex flex-col gap-4">
				<p class="font-bold">Category</p>
				<p>E-commerce</p>
			</div>
			<div class="flex flex-col gap-4">
				<p class="font-bold">Duration</p>
				<p>3 months</p>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<p class="font-bold">Background</p>
			<p>
				Audiophile.dk is a hi-fi audio shop that has been dealing with low conversion rates and dropping financial metrics. The goal was to dive into
				user pains and come up with an innovative digital concept that would help convert more customers. The team consisted of two people.
			</p>
		</div>
		<button class="py-6 px-8 bg-primary text-gray-900 font-bold self-start">See prototype</button>
	</section>
	<section class="pt-20">
		<div class="px-6 flex flex-col gap-4 justify-center items-center text-xl text-center">
			<h2 class="font-display text-5xl font-semibold mb-4">Brief summary.</h2>
			<h3 class="font-bold">Audio-what?</h3>
			<p>
				Have you ever felt stuck when deciding on what tech product to choose? It's like entering a treacherous labyrinth filled with an abundance of
				options, a cacophony of technical jargon, and a maze of mind-boggling specifications. You don’t need to be an audiophile to understand how
				overwhelming buying a new device can be. So hop on this journey to find out how me and my team went about solving the HiFi dilemma.
			</p>
		</div>
		<div class="flex flex-col md:flex-row">
			<img
				src="audiophile/audiophile-project-showcase-1.png"
				class="object-cover min-h-[40rem] md:mr-10 my-10 sm:my-20"
				alt="Audiophile Project Cover" />
			<div class="flex flex-col gap-10 px-6">
				<div class="flex flex-col gap-4">
					<h3 class="font-bold">Problem</h3>
					<p>
						What a surprise! Buying HiFi audio equipment is not the easiest thing to do. In fact, 40% of audiophiles perceived the process of
						researching and purchasing audio products as complex. The most frequently mentioned issues were understanding how audio products combine
						together (e.g. how the heck to connect a synthesizer to speakers and how to choose one?), room acoustics, and information overload.
					</p>
				</div>
				<div class="flex flex-col gap-4">
					<h3 class="font-bold">Solution</h3>
					<p>
						The audiophile app helps people explore product specifications with less friction. It chooses the best product for their room and
						identifies the perfect position for optimal sound with features such as room size and layout calculators, personalized product
						recommendations, and augmented reality visualization.
					</p>
				</div>
				<div class="flex flex-col gap-4">
					<h3 class="font-bold">Process</h3>
					<p>
						This project followed a Human Centered Design approach since most decisions taken in the development and define phases were based on prior
						User Research. Design-thinking methodologies were also an important element of the process. We first analysed the problem area by carrying
						out interviews and surveys and then synthesized our knowledge by putting all relevant insights in different models. Finally, we developed
						a HiFi Prototype by carrying out usability tests and prioritising user needs.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="pt-20 flex flex-col gap-10 px-6">
		<h2 class="font-display text-5xl font-semibold mb-4 text-center">Walkthrough.</h2>
		<div class="flex flex-col gap-6">
			<div class="flex flex-col justify-center items-center">
				<!-- <img src="audiophile/audiophile-project-walkthrough-1.png" class="object-fit" alt="Audiophile app new room screen" /> -->
				<!-- svelte-ignore a11y-media-has-caption -->
				<video
					use:videoPlayer
					use:inview
					on:inview_enter={handleEnter}
					on:inview_leave={handleLeave}
					src="audiophile/audiophile-project-video-showcase-1.mov"
					class="max-h-[40rem]"
					loop />
			</div>
			<div class="flex flex-col gap-6">
				<BigStar />
				<h3 class="font-bold">Scan room effortlessly</h3>
				<p>
					To provide accurate advice on optimizing sound and determining the ideal placement for audio products, precise measurements are crucial.
					With the AR scan room feature, users have the convenience of registering a 2D room plan effortlessly.
				</p>
			</div>
		</div>
		<div class="flex flex-col gap-6">
			<div class="flex flex-col justify-center items-center">
				<img src="audiophile/audiophile-project-walkthrough-2.png" class="object-fit" alt="Audiophile app new room screen" />
				<img src="audiophile/audiophile-project-walkthrough-3.png" class="object-fit" alt="Audiophile app new room settings screen" />
			</div>
			<div class="flex flex-col gap-6">
				<NinjaStar />
				<h3 class="font-bold">Add audio gear & generate report</h3>
				<p>
					The user can choose the audio products they want to add, drag them in the desired position, and generate a diagnostics report that will tell
					them whether the position they chose is good and whether the audio product matches room layout & size.
				</p>
			</div>
		</div>

		<div class="flex flex-col gap-6">
			<div class="flex flex-col justify-center items-center">
				<img src="audiophile/audiophile-project-walkthrough-4.png" class="object-fit" alt="Audiophile app new room screen" />
			</div>
			<div class="flex flex-col gap-6">
				<SmallStar />
				<h3 class="font-bold">See the HiFi product in AR mode</h3>
				<p>
					Welcome to our augmented reality (AR) mode for viewing high-fidelity (hifi) products in your room! With this innovative feature, you can now
					experience an immersive and realistic way to visualize how various hifi products would look and fit in your living space before making a
					purchase decision.
				</p>
			</div>
		</div>
	</section>
	<section class="py-20 px-6">
		<h2 class="font-bold mb-20 font-display text-5xl text-center">Now to the details...</h2>
		<div class="flex flex-col justify-center items-center">
			<div class="flex flex-col gap-4">
				<h3 class="font-bold">Finding the problem</h3>
				<p>
					Before working on this project, I have never even heard of the term “audiophile”. So I had a lot of catching up to do - to understand who
					are these people we are working for and what makes them suffer. It was completely new territory so we first wanted to jet down all our
					biases in relation to audiophiles and do research to confirm or disapprove our initial hypotheses.
				</p>
				<p>
					In parallel we also wanted to get to know the business, what strategies they have tried implementing, and what is the reason behind the low
					conversion rate. Is it the way the products are presented? Low-quality products? Poor marketing strategy? It was a diverging approach at its
					best - looking everywhere for new relevant information.
				</p>
			</div>
			<div class="py-10 px-20">
				<QuestionMark />
			</div>
		</div>
	</section>
</div>
