<script lang="ts">
	import Header from '$lib/ProjectsCore/Header.svelte';
	import TextBlock from '$lib/ProjectsCore/TextBlock.svelte';
	import ProjectLinkButton from '$lib/ProjectsCore/ProjectLinkButton.svelte';
	import ProjectTitle from '$lib/ProjectsCore/ProjectTitle.svelte';
	import ProjectCover from '$lib/ProjectsCore/ProjectCover.svelte';
	import ProjectOverview from '$lib/ProjectsCore/ProjectOverview.svelte';
	import ProjectOverviewItem from '$lib/ProjectsCore/ProjectOverviewItem.svelte';
	import ProjectSection from '$lib/ProjectsCore/ProjectSection.svelte';
	import ProjectConclusion from '$lib/ProjectsCore/ProjectConclusion.svelte';
    import ProjectFooter from '$lib/ProjectsCore/ProjectFooter.svelte';

	import Pencil from '$lib/assets/projects/audiophile/audiophile-project-shape-pencil.svg?component';
	import Computer from '$lib/assets/projects/audiophile/audiophile-project-shape-computer.svg?component';
	import Puzzle from '$lib/assets/projects/audiophile/audiophile-project-shape-puzzle.svg?component';
</script>

<div class="flex flex-col bg-white font-figtree text-4xl">
	<ProjectCover src="c-cube/c-cube-project-cover.png" alt="C-Cube Project Cover" />
	<ProjectTitle title="C-Cube" subHeader="Giving voice and creating a platform for change." />
	<ProjectOverview>
		<svelte:fragment slot="item">
			<ProjectOverviewItem header="Client" subHeader="C-Cube" />
			<ProjectOverviewItem header="Year" subHeader="2023" />
			<ProjectOverviewItem header="Category" subHeader="Non-Profit Org." />
		</svelte:fragment>
		<div class="flex flex-col gap-10 md:gap-16 lg:flex-row xl:mr-[6.25rem]">
			<TextBlock header="Project goal" classes="overview-text-block">
				C-cube is a non-profit organisation that has multiple cultural and entrepreneurial projects. To establish a more professional online presence
				and attract more financial partners or interns, it needed a new website and online brand identity.
			</TextBlock>
			<TextBlock header="Solution" classes="flex-1">
				I elevated a non-profit organization's image through website redesign, visual identity enhancement, and social media refinement, resulting in
				increased partnership inquiries. The comprehensive approach attracted more partners, amplifying the organization's mission for positive
				change.
			</TextBlock>
		</div>
	</ProjectOverview>
	<ProjectCover src="c-cube/c-cube-project-cover-2.png" alt="C-Cube Project Cover" />

	<ProjectSection class="quote-container">
		The objective was to develop an engaging platform that would captivate potential interns and partners, showcasing C-Cube as a professional hub
		while vividly representing the colorful and enriching experience offered through its projects.
	</ProjectSection>
	<ProjectSection class="bg-secondary">
		<div class="showcase-container">
			<img src="c-cube/c-cube-project-showcase-1.png" alt="C-Cube Project Showcase" />
			<img src="c-cube/c-cube-project-showcase-2.png" alt="C-Cube Project Showcase" />
			<img src="c-cube/c-cube-project-showcase-3.png" alt="C-Cube Project Showcase" />
			<img src="c-cube/c-cube-project-showcase-4.png" alt="C-Cube Project Showcase" />
		</div>
	</ProjectSection>
	<ProjectSection class="quote-container">
		Let's face it: NGOs can be perceived as a bit dull, lurking in the shadows despite the incredible impact they make.<br /><br />
		Determined to break the stereotype, I hatched a plan to create a vibrant space, infusing authenticity and color into the NGO's presence.
	</ProjectSection>
	<ProjectSection class="bg-primary">
		<div class="flex flex-col md:flex-row gap-6">
			<div class="flex-1">
				<img src="c-cube/c-cube-project-showcase-5.png" alt="C-Cube Project Showcase" loading="lazy" />
			</div>
			<div class="flex-1">
				<img src="c-cube/c-cube-project-showcase-6.png" alt="C-Cube Project Showcase" loading="lazy" />
				<TextBlock header="Neo-brutalism is my love" classes="mt-8 xl:mt-16">
					Drawing inspiration from the intriguing world of neo-brutalism, I experimented with the brand’s colors alternately, seeking to break free
					from the conventional. Embracing the simplicity of flat shapes and geometric designs, I crafted a website that aimed to be a reflection of
					C-cube’s mission. The use of outlines and strokes added a touch of uniqueness, resonating with their genuine essence. The outcome was a
					visually arresting website, humbly representing their authentic impact on the world.
				</TextBlock>
			</div>
		</div>
	</ProjectSection>
	<ProjectSection class="quote-container">
		I also was in charge of creating content for two C-Cube project pages: Aarhus Soup & ReGen Lab.<br /><br />
		Through this experience, I discovered my passion for creating vibrant and engaging designs tailor-made for social media platforms.
	</ProjectSection>
	<ProjectCover src="c-cube/c-cube-project-social-media.png" alt="C-Cube Project Social Media Showcase" />
	<ProjectSection hasPaddingBottom={false}>
		<Header>Now to the details...</Header>
		<div class="text-block-icon mt-20 md:mt-24 lg:mt-[7.5rem] xl:mt-36">
			<TextBlock header="Moodboard">
				Javier Esteves, the project leader, once described my approach as someone who doesn't shy away from drawing inspiration from others rather
				than reinventing the wheel. This sentiment perfectly reflects my modus operandi, where my initial step, after understanding the client's
				needs, involves exploring successful competitors in the field. I respectfully draw inspiration from their designs, building upon those
				foundations to create something both authentic and familiar—a delightful recipe for innovation.<br /><br />
				Before diving into the wireframes, I embarked on a quick scanning spree across multiple websites. Among them, Gumroad, Nike, and GoodSide studio
				stood out, captivating me with their fresh and visually appealing perspectives. These encounters fueled my creative ideas, influencing my design
				vision and inspiring me to craft a distinctive experience for the NGO's website.
			</TextBlock>
			<Pencil width="" height="" class="shrink-0 w-[13rem] xl:w-[18rem]" viewBox="0 0 417 361" />
		</div>
	</ProjectSection>
	<div class="bg-secondary grid grid-cols-2 grid-rows-6 gap-x-8 gap-y-8">
		<img src="c-cube/c-cube-project-moodboard-1.png" alt="C-Cube Project Moodboard" class="h-full object-cover row-span-2 row-start-1" />
		<img src="c-cube/c-cube-project-moodboard-3.png" alt="C-Cube Project Moodboard" class="h-full object-cover row-span-2 row-start-3" />
		<img src="c-cube/c-cube-project-moodboard-5.png" alt="C-Cube Project Moodboard" class="h-full object-cover row-span-2 row-start-5" />

		<img src="c-cube/c-cube-project-moodboard-2.png" alt="C-Cube Project Moodboard" class="h-full object-cover row-span-2 row-start-2" />
		<img src="c-cube/c-cube-project-moodboard-4.png" alt="C-Cube Project Moodboard" class="h-full object-cover row-span-2" />
	</div>
	<ProjectSection hasPaddingBottom={false}>
		<div class="text-block-icon">
			<TextBlock header="Wireframes">
				The process of crafting wireframes was akin to organizing a puzzle of simplicity and clarity. With a desire to ensure seamless user
				experience, I set out to create wireframes that would elegantly present information in a simple and easy-to-understand manner. I also tried to
				create a uniform layout that maintained consistency across all pages.<br /><br />
				Throughout the process, I sought feedback from colleagues and stakeholders to validate that the information's presentation aligned with the intended
				simplicity.
			</TextBlock>
			<Computer height="" width="" class="shrink-0 w-[12.5rem] md:w-[15.5rem] xl:w-[20.75rem]" viewBox="0 0 384 414" />
		</div>
	</ProjectSection>
	<ProjectSection class="bg-secondary flex items-center justify-center">
		<img src="c-cube/c-cube-project-wireframes.png" alt="C-Cube Project Wireframes" class="max-h-[58rem]" />
	</ProjectSection>
	<ProjectSection hasPaddingBottom={false}>
		<TextBlock header="Responsive Design & Breakpoints" classes="max-w-[50rem]">
			I designed mock-ups with multiple breakpoints to ensure the website looks great and works well on all devices. Initially, I operated with five
			different breakpoints, two for phone, two for tablet and the classic desktop one. It made it easier for the developer to build a responsive and
			user-friendly site, offering a smooth experience for all users, whether they use a desktop, tablet, or mobile device.
		</TextBlock>
	</ProjectSection>
	<div class="flex justify-between items-center w-full pl-6 md:pl-16 lg:pl-20 xl:pl-[6.25rem]">
		<div class="flex-[2]">
			<img src="c-cube/c-cube-project-responsiveness-1.png" alt="C-Cube Project Responsive Design for Phones" class="w-3/4 lg:w-auto" />
		</div>
		<div class="flex-[3]">
			<img src="c-cube/c-cube-project-responsiveness-2.png" alt="C-Cube Project Responsive Design for Tablets" class="object-cover" />
		</div>
		<div class="flex-[5] flex justify-end">
			<img src="c-cube/c-cube-project-responsiveness-3.png" alt="C-Cube Project Responsive Design for Laptops" class="object-cover flex-1" />
		</div>
	</div>
	<ProjectSection>
		<div class="text-block-icon">
			<TextBlock header="Collaborating is not always easy!">
				Throughout the project, my collaboration with the developer was marked by regular check-in meetings, adopting an iterative Agile approach to
				ensure smooth progress. During these meetings, I meticulously reviewed the list of components that required fine-tuning to achieve consistency
				with the design. To streamline our workflow, we organized our tasks on Trello, maintaining a transparent and efficient process.<br /><br />
				Working closely with the developer allowed me to gain invaluable insights into their work methods and thought processes. I came to understand that
				being a good UX/UI designer often involves striking a delicate balance between design aesthetics and functionality, quality, and time constraints.
			</TextBlock>
			<Puzzle height="" width="" class="shrink-0 w-[17.5rem] md:w-[22.5rem] xl:w-[30rem]" viewBox="0 0 481 256" />
		</div>
	</ProjectSection>
	<ProjectConclusion>
		In conclusion, my collaboration with C-Cube allowed me to wear multiple hats as a multidisciplinary designer, engaging in various types of design
		such as UX/UI, graphic, and motion design.<br /> <br />
		As the project unfolded, I embraced the art of compromise, making conscious decisions that prioritized both the user experience and the development
		feasibility. This harmonious collaboration and adaptability were instrumental in bringing the project to fruition, resulting in a website that seamlessly
		blended aesthetics and functionality while staying true to the NGO's mission. This experience has not only enriched my skillset but also fueled my
		passion for design, driving me to continue crafting impactful and user-centric digital experiences in the future.
	</ProjectConclusion>
    <ProjectFooter>
		<ProjectLinkButton href="audiophile" slot="previous">Audio-<br/>phile</ProjectLinkButton>
		<ProjectLinkButton href="clever-coffee" slot="next">Clever<br />Coffee</ProjectLinkButton>
	</ProjectFooter>
</div>

<style lang="postcss">
	:global(.overview-text-block path) {
		@screen lg {
			font-size: 1.25rem !important;
		}
	}
	.showcase-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 4rem;

		@screen md {
			grid-template-columns: repeat(4, 1fr);
		}
	}
	.showcase-container img {
		max-height: 30rem;

		@screen sm {
			max-height: none;
		}
	}

	.showcase-container img:nth-child(even) {
		margin-top: 4rem;
	}

	:global(.quote-container) {
		font-family: Clash Display, fallback-font, sans;
		font-size: 1.5rem;
		font-weight: 400;
		text-align: center;
		line-height: 2rem;

		@screen md {
			font-size: 2.25rem;
			line-height: 2.5rem;
		}

		@screen lg {
			font-size: 3rem;
			line-height: 1;
		}
	}
</style>
