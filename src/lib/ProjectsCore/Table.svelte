<script lang="ts">
	  import type { ComponentType} from 'svelte'

	export let iconType: ComponentType;
	export let tableHeader: string;
	export let borderColor: string = 'border-white';
	export let rows: string[] = [];
</script>

<div class="border-2 flex flex-col {borderColor}">
	<div class="font-display text-center text-2xl py-4 px-5 border-b-2 border-inherit">{tableHeader}</div>
	<div class="flex flex-col gap-6 py-8 px-8 text-xl">
		{#each rows as row}
			<div class="flex gap-6 items-center">
				<svelte:component this={iconType} width="2rem" height="2rem" viewBox="0 0 64 64" />
				<p class="flex-1">{row}</p>
			</div>
		{/each}
	</div>
</div>
