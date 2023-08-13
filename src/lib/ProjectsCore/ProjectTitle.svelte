<script lang="ts">
    export let title: string;
    export let subHeader: string;
</script>

<div
	class="flex flex-col items-center justify-center px-4 py-20 md:py-[7.5rem] md:px-12 lg:py-36 lg:px-20 xl:px-[6.25rem] gap-2 font-semibold text-center text-gray-900 bg-white font-display">
	<h1 class="font-display text-5xl font-bold sm:text-[5.25rem] md:text-8xl">{title}</h1>
	<p class="text-4xl md:text-6xl font-medium">{subHeader}</p>
</div>
