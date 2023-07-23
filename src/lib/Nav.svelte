<script lang="ts">
    import NavItem from './NavItem.svelte';
    export let isFixed : boolean;
</script>

<nav class="{isFixed ? 'fixed' : 'absolute' } top-0 left-1/2 transform -translate-x-1/2 flex items-center gap-auto lg:gap-6 justify-between max-w-sm lg:max-w-lg my-4 mx-auto py-2 px-4 sm:px-6 border-2 border-gray-900 rounded-full">
    <NavItem href="/" label="Projects" />
    <NavItem href="/cv" label="CV" />
    <NavItem href="/about" label="About Me" />
</nav>