<script lang="ts">
	import Eye from '$lib/assets/projects/audiophile/audiophile-project-shape-eye-horizontal.svg?component';
</script>

<section class="flex justify-between items-center py-16 px-4 md:p-16 xl:p-[6.25rem]">
	<slot name="previous"></slot>
	<Eye class="shape-shadow w-16 sm:w-20 md:w-[6.25rem] lg:w-[9.25rem] xl:w-[12.5rem]" viewBox="0 0 211 113" />
    <slot name="next"></slot>
</section>
