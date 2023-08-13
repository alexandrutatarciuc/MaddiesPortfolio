<script lang="ts">
    let classes: string = '';
    export {classes as class};
    export let hasPaddingBottom: boolean = true;
</script>

<div class:pb-20={hasPaddingBottom} class="pt-20 px-6 md:py-36 md:px-16 lg:px-20 xl:px-[6.25rem] {classes}">
<slot></slot>
</div>