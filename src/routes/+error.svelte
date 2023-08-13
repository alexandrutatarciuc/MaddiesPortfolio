<script lang="ts">
    import CenteredLayout from "$lib/Layouts/CenteredLayout.svelte";
    import QuestionMark from '$lib/assets/projects/audiophile/audiophile-project-shape-question-mark.svg?component';
    import Nav from "$lib/Navigation/Nav.svelte";
</script>

<Nav />
<CenteredLayout>
    <svelte:fragment slot="text">Page not found.</svelte:fragment>
    <QuestionMark slot="svg" height="" width="" class="shrink-0 w-[10rem] md:w-[12.5rem] xl:w-[25rem]" viewBox="0 0 240 276" />
</CenteredLayout>