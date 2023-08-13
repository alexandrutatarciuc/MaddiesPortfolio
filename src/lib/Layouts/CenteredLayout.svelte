<section class="min-h-screen w-full bg-white flex justify-center items-center">
    <div class="flex-1 flex flex-col xl:flex-row gap-16 justify-between items-center max-w-[112rem] lg:px-12">
        <h1 class="font-display font-bold text-5xl md:text-8xl text-center">
            <slot name="text"></slot>
        </h1>
        <slot name="svg"></slot>
    </div>
</section>