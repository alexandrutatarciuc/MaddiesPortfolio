<script lang="ts">
    import Nav from '$lib/Navigation/Nav.svelte';
	import CenteredLayout from '$lib/Layouts/CenteredLayout.svelte';
	import Puzzle from '$lib/assets/projects/audiophile/audiophile-project-shape-puzzle.svg?component';
</script>

<svelte:head>
	<title>Mădălina Chelaru — About me</title>
</svelte:head>

<Nav />
<CenteredLayout>
	<svelte:fragment slot="text">Work in<br /> progress.</svelte:fragment>
	<Puzzle slot="svg" height="" width="" class="shrink-0 w-[20rem] sm:w-[25rem] md:w-[35rem] xl:w-[45rem]" viewBox="0 0 481 256" />
</CenteredLayout>
