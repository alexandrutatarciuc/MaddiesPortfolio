<script lang="ts">
    
    export let header : string;
    export let isCentered : boolean = false;
    export let classes : string = "";

</script>

<div class:text-center={isCentered} class="font-figtree flex flex-col gap-4 text-xl {classes}">
    <h3 class="font-bold">{header}</h3> 
    <p class="lg:text-2xl"> 
        <slot/>
    </p>
</div>