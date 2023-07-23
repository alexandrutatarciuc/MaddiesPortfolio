<script lang="ts">
    import { page } from '$app/stores'; // SvelteKit's store for page info
    import { goto } from '$app/navigation';
    export let href: string = "/";
    export let label: string = "";

    $: isActive = $page.url.pathname === href;

    function navigate(): void {
        goto(href);
    }
  </script>
  
  <a class="py-4 px-6 font-display text-sm lg:text-xl font-medium whitespace-nowrap rounded-full text-center min-w-0 sm:min-w-[6rem] lg:min-w-[8rem] {isActive ? 'bg-primary' : ''}" href="#" on:click|preventDefault={navigate}>{label}</a>

  <style>
  </style>
  