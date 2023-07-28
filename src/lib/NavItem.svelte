<script lang="ts">
    import { page } from '$app/stores'; // SvelteKit's store for page info
    export let href: string = "/";
    export let label: string = "";

    $: isActive = ($page.url.pathname.split("/")[1] === "projects" && label.toLowerCase() === "projects") 
              || $page.url.pathname === href;
  </script>
  
  <a class:bg-primary={isActive} class="z-20 py-4 px-6 font-display text-sm lg:text-xl font-medium whitespace-nowrap rounded-full text-center min-w-0 sm:min-w-[6rem] lg:min-w-[8rem]" {href}>{label}</a>
  <style>
  </style>
  