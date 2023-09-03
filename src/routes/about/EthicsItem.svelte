<script lang="ts">
    export let title: string;
    export let description: string;
    export let hasFlexReversed: boolean = true;
</script>

<div class="flex flex-col {hasFlexReversed ? "xl:flex-row-reverse" : "xl:flex-row"} gap-8">
    <slot name="icon"></slot>
    <div>
        <p class="text-body-title-1 mb-8">{title}</p>
        <p class="text-body">{description}</p>
    </div>
</div>