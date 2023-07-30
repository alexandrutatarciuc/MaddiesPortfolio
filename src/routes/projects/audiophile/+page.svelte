<script lang="ts">
	import Header from '$lib/ProjectsCore/Header.svelte';
	import TextBlock from '$lib/ProjectsCore/TextBlock.svelte';
	import Table from '$lib/ProjectsCore/Table.svelte';

	import BigStar from '$lib/assets/projects/audiophile/audiophile-project-shape-1.svg?component';
	import NinjaStar from '$lib/assets/projects/audiophile/audiophile-project-shape-2.svg?component';
	import SmallStar from '$lib/assets/projects/audiophile/audiophile-project-shape-3.svg?component';
	import QuestionMark from '$lib/assets/projects/audiophile/audiophile-project-shape-question-mark.svg?component';
	import Diagram from '$lib/assets/projects/audiophile/audiophile-project-shape-diagram.svg?component';
	import Puzzle from '$lib/assets/projects/audiophile/audiophile-project-shape-puzzle.svg?component';
	import Bulb from '$lib/assets/projects/audiophile/audiophile-project-shape-bulb.svg?component';
	import Pencil from '$lib/assets/projects/audiophile/audiophile-project-shape-pencil.svg?component';
	import Computer from '$lib/assets/projects/audiophile/audiophile-project-shape-computer.svg?component';

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails } from 'svelte-inview';

	const userInsightsRows: string[] = [
		'Most successful competitors in the market have features such as 360 product rotation and AR apps to vizualize speakers in their room.',
		'The users can be quite nerdy in regard to product specifications because they have the ultimate goal of perfect sound reproduction.',
		'Not all people need to audition an audio product to purchase it, a lot of them trust the product reviews when it comes to making a purchase.'
	];

	const businessInsightsRows: string[] = [
		"Audiophiles' target group consists mainly of men who have a decent financial situation, and are interested in movies, music, and tech.",
		'Audiophile.dk’s principles focus on making customer ears “happy”, giving helpful guidance, and being trustworthy in terms of the products and services they offer.',
		'The company sells most of it’s products online and not too many people come to the showroom.'
	];

	const brainstormIdeasRows: string[] = [
		'Website Product Walkthrough',
		'Resell Community with second-hand audiophile products',
		'Hear the product without auditioning it',
		'Built-in algorithm that tells you how good your audio products combination is',
		'HiFi Podcast',
		'AR Room Scan that helps with audio product placement and room acoustics'
	];

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

<div class="flex flex-col bg-white font-fig tree">
	<img src="audiophile/audiophile-project-cover.png" class="min-h-[40rem] object-cover" alt="Audiophile Project Cover" />
	<div class="flex flex-col items-center justify-center px-4 py-20 gap-2 font-semibold text-center text-gray-900 bg-white font-display">
		<h1 class="font-display text-5xl font-bold sm:text-[5.25rem] md:text-8xl">Audiophile App</h1>
		<p class="text-4xl md:text-6xl font-medium">Tapping into the HiFi purchase dilemmas.</p>
	</div>
	<section class="flex flex-col gap-10 px-6 sm:px-16 md:px-20 lg:px-[6.25rem] py-16 text-xl font-medium text-white bg-gray-900">
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
			<p class="lg:mr-48">
				Audiophile.dk is a hi-fi audio shop that has been dealing with low conversion rates and dropping financial metrics. The goal was to dive into
				user pains and come up with an innovative digital concept that would help convert more customers. The team consisted of two people.
			</p>
		</div>
		<button class="py-6 px-8 bg-primary text-gray-900 font-bold self-start">See prototype</button>
	</section>
	<section class="pt-20">
		<div class="px-6 flex flex-col gap-4 justify-center items-center text-xl text-center">
			<Header>Brief summary.</Header>
			<TextBlock header="Audio-what?" isCentered>
				Have you ever felt stuck when deciding on what tech product to choose? It's like entering a treacherous labyrinth filled with an abundance of
				options, a cacophony of technical jargon, and a maze of mind-boggling specifications. You don’t need to be an audiophile to understand how
				overwhelming buying a new device can be. So hop on this journey to find out how me and my team went about solving the HiFi dilemma.
			</TextBlock>
		</div>
		<div class="flex flex-col md:flex-row md:mt-20">
			<div class="md:flex-1 md:mr-20">
				<img
					src="audiophile/audiophile-project-showcase-1.png"
					class="object-cover min-h-[40rem] md:min-h-full md:my-0 my-10 sm:my-20"
					alt="Audiophile Project Cover" />
			</div>
			<div class="flex flex-col gap-10 px-6 sm:px-16 md:pr-20 lg:pr-[6.25rem] md:pl-0 md:flex-1">
				<TextBlock header="Problem">
					What a surprise! Buying HiFi audio equipment is not the easiest thing to do. In fact, 40% of audiophiles perceived the process of
					researching and purchasing audio products as complex. The most frequently mentioned issues were understanding how audio products combine
					together (e.g. how the heck to connect a synthesizer to speakers and how to choose one?), room acoustics, and information overload.
				</TextBlock>
				<TextBlock header="Solution">
					The audiophile app helps people explore product specifications with less friction. It chooses the best product for their room and identifies
					the perfect position for optimal sound with features such as room size and layout calculators, personalized product recommendations, and
					augmented reality visualization.
				</TextBlock>
				<TextBlock header="Process">
					This project followed a Human Centered Design approach since most decisions taken in the development and define phases were based on prior
					User Research. Design-thinking methodologies were also an important element of the process. We first analysed the problem area by carrying
					out interviews and surveys and then synthesized our knowledge by putting all relevant insights in different models. Finally, we developed a
					HiFi Prototype by carrying out usability tests and prioritising user needs.
				</TextBlock>
			</div>
		</div>
	</section>
	<section class="pt-20 flex flex-col gap-10 px-6 sm:px-16 md:px-20 lg:px-[6.25rem]">
		<Header>Walkthrough.</Header>
		<div class="flex flex-col gap-6">
			<div class="flex flex-col justify-center items-center">
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
			<BigStar class="mb-6" />
			<TextBlock header="Scan room effortlessly">
				To provide accurate advice on optimizing sound and determining the ideal placement for audio products, precise measurements are crucial. With
				the AR scan room feature, users have the convenience of registering a 2D room plan effortlessly.
			</TextBlock>
		</div>
		<div class="flex flex-col gap-6">
			<div class="flex flex-col justify-center items-center">
				<img src="audiophile/audiophile-project-walkthrough-2.png" class="object-fit" alt="Audiophile app new room screen" />
				<img src="audiophile/audiophile-project-walkthrough-3.png" class="object-fit" alt="Audiophile app new room settings screen" />
			</div>
			<NinjaStar class="mb-6" />
			<TextBlock header="Add audio gear & generate report">
				The user can choose the audio products they want to add, drag them in the desired position, and generate a diagnostics report that will tell
				them whether the position they chose is good and whether the audio product matches room layout & size.
			</TextBlock>
		</div>

		<div class="flex flex-col gap-6">
			<div class="flex flex-col justify-center items-center">
				<img src="audiophile/audiophile-project-walkthrough-4.png" class="object-fit" alt="Audiophile app new room screen" />
			</div>
			<SmallStar class="mb-6" />
			<TextBlock header="See the HiFi product in AR mode">
				Welcome to our augmented reality (AR) mode for viewing high-fidelity (hifi) products in your room! With this innovative feature, you can now
				experience an immersive and realistic way to visualize how various hifi products would look and fit in your living space before making a
				purchase decision.
			</TextBlock>
		</div>
	</section>
	<section class="py-20 px-6 sm:px-16 md:px-20 lg:px-[6.25rem]">
		<div class="mb-20">
			<Header>Now to the details...</Header>
		</div>
		<div class="flex flex-col justify-center items-center">
			<TextBlock header="Finding the problem">
				Before working on this project, I have never even heard of the term “audiophile”. So I had a lot of catching up to do - to understand who are
				these people we are working for and what makes them suffer. It was completely new territory so we first wanted to jet down all our biases in
				relation to audiophiles and do research to confirm or disapprove our initial hypotheses.
				<br /><br />
				In parallel we also wanted to get to know the business, what strategies they have tried implementing, and what is the reason behind the low conversion
				rate. Is it the way the products are presented? Low-quality products? Poor marketing strategy? It was a diverging approach at its best - looking
				everywhere for new relevant information.
			</TextBlock>
			<div class="py-10 px-20">
				<QuestionMark />
			</div>
		</div>
	</section>
	<section class="bg-gray-900 text-white px-5 py-16 flex flex-col gap-16">
		<TextBlock header="Valid data above all">
			Traditionally, we focused our research on two topics: User Research and Business Research. I dived deep into user research by following a couple
			of methodologies: netnography, ethnography, qualitative and quantitative data collection. I wanted to obtain valid data and triangulate it. Here
			are some key insights I found about the users and competitors:
		</TextBlock>
		<div class="flex flex-col gap-16 lg:flex-row lg:gap-0">
			<Table tableHeader="User Insights" rows={userInsightsRows} iconType={NinjaStar} borderColor="lg:border-r-0" />
			<Table tableHeader="Business Insights" rows={businessInsightsRows} iconType={NinjaStar} />
		</div>
	</section>
	<section class="px-6 sm:px-16 md:px-20 lg:px-[6.25rem] py-16 flex flex-col items-center">
		<TextBlock header="Quantitative Analysis">
			After gathering some superficial knowledge from some personal interviews and preliminary research, I and my colleague were more confident in our
			impression of audiophiles and what to ask in a survey. When creating the survey, I tried to be aware of all my biases that still might have not
			fully disappeared. I tried to ask questions that would give valuable answers to our research and concept development process. Reddit was a huge
			help for us, as it had several audiophile communities that were open to answer to our questions. Ladies and gentlemen, the results that helped
			us find our final problem statement:
		</TextBlock>
		<div class="py-10 px-20 mt-4 mb-10">
			<Diagram />
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 border-2 border-gray-900 font-display text-xl mb-16">
			<div class="py-10 px-8 border-b-2 md:border-r-2 border-inherit flex flex-col items-center gap-4">
				<NinjaStar width="2rem" height="2rem" viewBox="0 0 64 64" />
				<p class="text-center"><strong>54%</strong> last bought a HiFi product a couple of months ago</p>
			</div>
			<div class="py-10 px-8 border-b-2 border-inherit flex flex-col items-center gap-4">
				<SmallStar width="2rem" height="2rem" viewBox="0 0 64 64" />
				<p class="text-center"><strong>72%</strong> purchased the HiFi item online</p>
			</div>
			<div class="py-10 px-8 border-b-2 md:border-r-2 border-inherit flex flex-col items-center gap-4">
				<BigStar width="2rem" height="2rem" viewBox="0 0 64 64" />
				<p class="text-center"><strong>40%</strong> rated the complexity of purchasing and researching audio-gear with a 4 (1 - easy)</p>
			</div>
			<div class="py-10 px-8 border-b-2 border-inherit flex flex-col items-center gap-4">
				<NinjaStar width="2rem" height="2rem" viewBox="0 0 64 64" />
				<p class="text-center"><strong>74%</strong> did not audition the product when purchasing it</p>
			</div>

			<div class="py-10 px-8 border-b-2 md:border-b-0 md:border-r-2 border-inherit flex flex-col items-center gap-4">
				<NinjaStar width="2rem" height="2rem" viewBox="0 0 64 64" />
				<p class="text-center"><strong>47%</strong> said the problem they encountered was conflicting information and product reviews</p>
			</div>

			<div class="py-10 px-8 border-inherit flex flex-col items-center gap-4">
				<BigStar width="2rem" height="2rem" viewBox="0 0 64 64" />
				<p class="text-center">
					<strong>36%</strong> said the problem they encountered was the lack of relevant information and difficulty of finding it
				</p>
			</div>
		</div>
		<div class="text-block-icon mb-10 md:mb-20">
			<TextBlock header="The problem statement">
				The survey results confirmed our hypothesis and pointed in the direction of information overwhelm during the purchasing process. In short,
				users need clear, simple answers to their complicated questions.
			</TextBlock>
			<Puzzle class="min-w-[17.5rem]" />
		</div>
		<div
			class="flex justify-center items-center mb-20 text-center font-medium font-display text-3xl sm:text-4xl md:text-5xl border-2 border-gray-900 bg-secondary text-gray-900 py-20 px-6">
			<p>... how might we ease the research and buying process of audio gear?</p>
		</div>
		<TextBlock header="The two different personas">
			During my thorough netnography research I spotted two distinct types of users. And to not take too much of your time I will briefly write the
			main difference criteria here.
		</TextBlock>
		<img
			src="audiophile/audiophile-project-user-persona-distinction-table.png"
			class="object-contain mt-8 mb-20"
			alt="Audiophile User Persona Distiction Table" />
		<TextBlock header="User Journey">
			Paired with the Empathy Map (which you can see here), the user journey gave a holistic overview of the experience the audiophiles go through
			when challenging themselves with a new product. It brought a human perspective on our outlook of the user personas. I believe the user journey
			helped me to empathize more with the users than the Empathy Map (pun intended). This gave me the ultimate motivation to take action in the
			consideration and purchase phases.
		</TextBlock>
		<img src="audiophile/audiophile-project-user-journey.png" class="object-contain" alt="Audiophile User Journey" />
	</section>
	<section class="flex flex-col items-center py-16 px-6 sm:px-16 md:px-20 lg:px-[6.25rem] bg-primary">
		<Bulb class="mb-20" />
		<div class="flex flex-col lg:flex-row gap-10 md:gap-20">
			<Table borderColor="border-gray-900 flex-1" tableHeader="Brainstorm Ideas" rows={brainstormIdeasRows} iconType={SmallStar} />
			<div class="flex-1 flex flex-col gap-10 md:gap-20">
				<TextBlock header="User Journey">
					After successfully finishing the define phase, where we understood the customer profile and their behavior, the next step was to ideate
					useful solutions that give an answer to the problem statement. To generate as many ideas that are out of the box, we set an 8-minute
					deadline in which we should write as many ideas that come to mind. We grouped them based on common themes and patterns.
					<br /><br />
					Afterwards, we refined our ideas and selected a maximum of 5 favourites.
				</TextBlock>
				<TextBlock header="Final Decision">
					We arrived at the following solution: AR Audiophile App which helps you choose the most suitable audio product for your room and identifies
					the best position for optimal sound.
				</TextBlock>
			</div>
		</div>
	</section>
	<section class="flex flex-col items-center py-16 px-6 sm:px-16 md:px-20 lg:px-[6.25rem]">
		<div class="text-block-icon mb-10 md:mb-20">
			<TextBlock header="Sketches">
				When creating the sketches, I sought inspiration from similar apps that have an AR scan feature. I don’t like to reinvent the wheel, but
				rather seek inspiration and build on top of it. As such, I used MagicPlan, Ikea Place, and other similar apps to form a vision of how the
				Audiophile App might look like.
			</TextBlock>
			<Pencil class="min-w-[278px]" />
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 lg:gap-8 mb-20 sm:mb-[7.5rem]">
			<img src="audiophile/audiophile-project-sketch-1.png" class="lg:col-span-2 w-full" alt="Audiophile Sketch" />
			<img src="audiophile/audiophile-project-sketch-2.png" class="w-full" alt="Audiophile Sketch" />
			<img src="audiophile/audiophile-project-sketch-3.png" class="w-full" alt="Audiophile Sketch" />
		</div>
		<div class="text-block-icon">
			<TextBlock header="Wireframes">
				After the idea was set, the sketches drawn, and the flowchart created - the next big phase was to start designing the app. In the process, we
				kept in mind crucial rules about the user: how prone they are towards making mistakes and being distracted, the creation of mental models and
				their continuous update when using new products, and finally the fact that users understand visual systems.
			</TextBlock>
			<Computer class="min-w-[202px]" />
		</div>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-10 md:mb-20">
			<img src="audiophile/audiophile-project-wireframes-1.png" class="w-full" alt="Audiophile Wireframe" />
			<img src="audiophile/audiophile-project-wireframes-2.png" class="w-full" alt="Audiophile Wireframe" />
			<img src="audiophile/audiophile-project-wireframes-3.png" class="w-full" alt="Audiophile Wireframe" />
			<img src="audiophile/audiophile-project-wireframes-4.png" class="w-full" alt="Audiophile Wireframe" />
		</div>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
			<img src="audiophile/audiophile-project-wireframes-5.png" class="w-full" alt="Audiophile Wireframe" />
			<img src="audiophile/audiophile-project-wireframes-6.png" class="w-full" alt="Audiophile Wireframe" />
			<img src="audiophile/audiophile-project-wireframes-7.png" class="w-full" alt="Audiophile Wireframe" />
			<img src="audiophile/audiophile-project-wireframes-8.png" class="w-full" alt="Audiophile Wireframe" />
		</div>
		<p class="text-center">
			Our app allows the user to add a new room either by scanning it or adding pictures of it. The process continues by guiding the user through the
			scanning part of the app. We decided to match the AR scanning process with the real world by making use of the already-known schemas or mental
			models in regard to AR technologies. This way our solution would be more familiar to the user.
		</p>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-8">
			<img src="audiophile/audiophile-project-wireframes-9.png" class="w-full" alt="Audiophile Wireframe" />
			<img src="audiophile/audiophile-project-wireframes-10.png" class="w-full" alt="Audiophile Wireframe" />
			<img src="audiophile/audiophile-project-wireframes-11.png" class="w-full" alt="Audiophile Wireframe" />
			<img src="audiophile/audiophile-project-wireframes-12.png" class="w-full" alt="Audiophile Wireframe" />
		</div>
		<p class="text-center">
			Finally, after adding the products and dragging them to the preferred place, the user receives the sound optimization feedback. The room plan
			changes and shows the user a triangulation of the listening area, the listening space, and the distance between the speakers, all based on the
			indicated position of the speakers by the user.
		</p>
	</section>
</div>

<style lang="postcss">
	.text-block-icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;

		@screen md {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>
