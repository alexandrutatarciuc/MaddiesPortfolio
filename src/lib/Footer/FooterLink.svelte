<script lang="ts">
    export let text : string;
    export let link : string;
</script>

<a href="{link}"
class="flex items-center gap-1">{text}
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    class="inline">
    <g id="iconoir:arrow-tr">
        <path
            id="Vector"
            d="M6 19.0967L19 6.09668M19 6.09668V18.5767M19 6.09668H6.52"
            stroke="#F7AEF8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"/>
    </g>
</svg>
</a>