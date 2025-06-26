<template>
    <div class="relative isolate flex flex-col overflow-hidden py-20">
        <h1
            class="mx-auto
                mt-20
                inline-block
                text-center
                font-sans
                text-[clamp(3rem,13vw,9rem)]
                font-bold
                text-san-juan
                dark:text-maize"
        >
            Ezra<br>
            Workshop
        </h1>

        <div class="mx-auto max-w-7xl">
            <div class="mt-20 flex pl-6">
                <div
                    class="mr-[-100vw]
                        ms-auto
                        rounded-s-xl
                        bg-link-water
                        p-6
                        pr-[100vw]
                        text-xl
                        font-semibold
                        text-neutral
                        sm:text-2xl
                        lg:text-3xl"
                >
                    <div class="mr-2">
                        2025: Gottes Superhelden
                    </div>
                    <div class="mr-2 mt-2 text-lg">
                        Alttestamentliche Erzähltexte weitergeben (am Beispiel von 1. & 2. Könige)
                    </div>
                </div>
            </div>

            <div class="mt-20 flex pr-6">
                <div
                    class="ml-[-100vw]
                        flex
                        w-auto
                        items-center
                        rounded-e-xl
                        bg-rajah
                        p-6
                        pl-[100vw]
                        text-neutral"
                >
                    <nuxt-img
                        src="/pr/andrew-sach.jpg"
                        alt="Andrew Sach"
                        class="ml-2 h-24 w-24 min-w-[4rem] shrink-0 rounded-full object-cover"
                    />
                    <div class="ml-4">
                        <h2
                            class="text-xl font-semibold sm:text-2xl lg:text-3xl"
                        >
                            mit Andrew Sach
                        </h2>
                        <p class="max-w-xl text-lg sm:block">
                            Andrew Sach dient als Pastor der Grace Church Greenwich und
                            Mitarbeiter bei "The Proclamation Trust".
                            Er ist u.a. Co-Autor des Buches "Tiefer graben".
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
