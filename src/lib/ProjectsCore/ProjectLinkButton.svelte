<script lang="ts">
	export let href: string;
</script>

<a
	class="flex justify-center items-center border-2 border-gray-900 rounded-full py-4 px-6 md:p-10 
    text-gray-900 text-2xl md:text-5xl lg:text-6xl xl:text-8xl font-display font-medium
    hover:bg-primary hover:text-white transition-colors text-center" {href} >
	<slot/>
</a>
