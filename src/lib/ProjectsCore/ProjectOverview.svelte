<script lang="ts">
    export let buttonHref: string = "";
    export let buttonLabel: string = "See prototype";
</script>

<section class="flex flex-col gap-10 px-6 sm:px-16 md:px-20 lg:px-[6.25rem] py-16 text-xl text-white bg-gray-900">
    <div class="grid grid-flow-row grid-cols-2 gap-16 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 font-medium">
        <slot name="item"></slot>
    </div>
    <div class="flex flex-col gap-4">
        <slot></slot>
    </div>
    <a class="py-6 px-8 bg-primary text-gray-900 font-bold self-start" target="_blank" href="{buttonHref}">{buttonLabel}</a>
</section>