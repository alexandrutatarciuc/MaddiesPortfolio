<script lang="ts">
	import FooterLink from "./FooterLink.svelte";
</script>

<section class="bg-gray-900 px-6 py-6 sm:py-8 lg:py-14 xl:py-16 font-display font-bold text-primary text-center">
	<p class="text-4xl sm:text-6xl md:text-[5.25rem] lg:text-8xl mb-12 lg:mb-16">Get in <br />touch!</p>
	<p class="text-xl sm:text-2xl md:text-4xl font-normal mb-6">
		Contact me at <a href="mailto:maddychelaru@gmail.com" class="inline">maddychelaru@gmail.com</a>
	</p>
	<div class="text-xl sm:text-2xl md:text-4xl flex flex-wrap font-normal items-center justify-center gap-x-20">
		<FooterLink text="Instagram" link="/"></FooterLink>
		<FooterLink text="LinkedIn" link="/"></FooterLink>
	</div>
</section>