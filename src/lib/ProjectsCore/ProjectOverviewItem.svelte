<script lang="ts">
    export let header: string;
    export let subHeader: string;
</script>

<div class="flex flex-col gap-4">
    <p class="font-bold">{header}</p>
    <p>{subHeader}</p>
</div>