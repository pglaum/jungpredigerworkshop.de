<template>
    <div class="relative isolate flex flex-col overflow-hidden py-20">
        <h1
            class="
             mx-auto
             mt-20
             inline-block
             bg-gradient-to-r
             from-rajah
             to-hippie-blue
             bg-clip-text
             text-center
             font-sans
             text-[clamp(3rem,13vw,9rem)]
             font-bold
             text-transparent"
        >
            Jungprediger<br>
            Workshop
        </h1>

        <div class="mx-auto max-w-7xl">
            <div class="mt-20 flex pl-6">
                <div
                    class="
                     mr-[-100vw]
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
                    <span class="mr-6">
                        2023:
                        Das Buch Josua predigen
                    </span>
                </div>
            </div>

            <div class="mt-20 flex pr-6">
                <div
                    class="
                     ml-[-100vw]
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
                        src="/pr/nigel-styles.jpeg"
                        alt="Nigel Styles"
                        class="ml-6 h-16 w-16 min-w-[4rem] rounded-full object-cover"
                    />
                    <div class="ml-4">
                        <h2
                            class="text-xl font-semibold sm:text-2xl lg:text-3xl"
                        >
                            mit Nigel Styles
                        </h2>
                        <p class="text-lg sm:block">
                            Director des „Cornhill Training Course“ & Leiter von Proclamation Trust“, London
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
