<svelte:head>
    <title>Home</title>
</svelte:head>

<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
</script>

<section class="w-full flex justify-center items-center h-screen px-6 sm:px-8 md:px-15 lg:px-auto overflow-hidden">
    <div class="relative text-display border-2 border-gray-900 rounded-2xl mx-auto px-4 sm:px-8 md:px-10 lg:px-15 py-12 sm:py-19 flex flex-col gap-10 max-w-[70rem] hi-section">
        <h1 class="font-display text-center font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[5.25rem] lg:leading-none xl:text-8xl">
            Hi, I'm Maddie!
            <br>
            <div class="sm:mt-5">
                A <span class="bg-button inline-block text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl transform -rotate-6 outline-offset-[-6px] sm:outline-offset-[-8px] lg:outline-offset-[-10px] xl:outline-offset-[-14px] inline-tag p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 rounded-full ml-1 mr-3 lg:ml-2 lg:mr-6">UX/UI</span>Designer.
            </div>
        </h1>
        <p class="text-xl md:text-2xl font-display font-500 text-center">
            My purpose is to give voice to overlooked perspectives, fostering meaningful connections and inclusivity. 
            I channel my skills to support those with meaningful projects, ensuring their visions reach a wider audience.
        </p>
    </div>
</section>
<section class="h-screen w-full bg-button px-6 sm:px-8 md:px-15 xl:px-[6.25rem] py-20 sm:py-30 xl:py-[8.75rem] flex flex-col justify-center gap-16">
    <p class="text-white font-display font-medium text-2xl sm:text-4xl">
        I am looking forward to jobs that are...
    </p>
    <div class="flex flex-col gap-6 sm:gap-8 font-display text-4xl sm:text-6xl md:text-[5.25rem] xl:text-8xl text-primary font-bold">
        <p>challenging</p>
        <p>creative</p>
        <p>analytical</p>   
        <p>collaborative</p>
    </div>
</section>
<section class="bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[6.25rem] py-20 md:py-36 ">
    <h2 class="font-display text-4xl sm:text-6xl xl:text-[5.25rem] text-gray-900 mb-10 text-center font-semibold">Projects</h2>
    <div class="flex flex-col gap-16"> 
        <ProjectCard imgUrl="/projects/c-cube/c-cube-project-cover-preview.png" title="C-Cube" tags="UX/UI | Branding | Web Development"/>
        <ProjectCard imgUrl="/projects/audiophile/audiophile-project-cover-preview.png" title="Audiophile App" tags="Concept Development | UX | App Design"/>
        <ProjectCard imgUrl="/projects/my-coffee-impact/my-coffee-impact-project-cover-preview.png" title="My Coffee Impact Platform" tags="Gamification | Website Design"/>
    </div>
</section>

<style lang="postcss">
    .inline-tag {
        outline: 2px solid theme(colors.gray.900);
        box-shadow: 3px 4px 0px 0px theme(colors.gray.900);
        -webkit-box-shadow: 3px 4px 0px 0px theme(colors.gray.900);
        -moz-box-shadow: 3px 4px 0px 0px theme(colors.gray.900);

        @screen lg {
            box-shadow: 9px 10px 0px 0px theme(colors.gray.900);
            -webkit-box-shadow: 9px 10px 0px 0px theme(colors.gray.900);
            -moz-box-shadow: 9px 10px 0px 0px theme(colors.gray.900);
        }

        @screen md {
            box-shadow: 5px 6px 0px 0px theme(colors.gray.900);
            -webkit-box-shadow: 5px 6px 0px 0px theme(colors.gray.900);
            -moz-box-shadow: 5px 6px 0px 0px theme(colors.gray.900);
        }
    }

    .hi-section {
        box-shadow: 7px 8px 0px 0px theme(colors.button);
        -webkit-box-shadow: 7px 8px 0px 0px theme(colors.button);
        -moz-box-shadow: 7px 8px 0px 0px theme(colors.button);

        @screen md {
            box-shadow: 10px 11px 0px 0px theme(colors.button);
            -webkit-box-shadow: 10px 11px 0px 0px theme(colors.button);
            -moz-box-shadow: 10px 11px 0px 0px theme(colors.button);
        }

        @screen xl {
            box-shadow: 14px 15px 0px 0px theme(colors.button);
            -webkit-box-shadow: 14px 15px 0px 0px theme(colors.button);
            -moz-box-shadow: 14px 15px 0px 0px theme(colors.button);
        }
    }
</style>
