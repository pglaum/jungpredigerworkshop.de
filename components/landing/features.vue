<template>
    <div class="w-full bg-rajah py-20 text-neutral">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-3xl lg:text-center">
                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                    Was den Workshop kennzeichnen wird
                </h2>
            </div>
        </div>
        <div
            class="mx-auto mt-16 max-w-2xl px-6 sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div v-for="feature in features" :key="feature.name" class="relative pl-16">
                    <dt class="text-base font-bold leading-7">
                        <div
                            class="absolute
                             left-0
                             top-0
                             flex
                             h-10
                             w-10
                             items-center
                             justify-center
                             rounded-lg
                             bg-san-juan
                             text-white"
                        >
                            <icon :name="feature.icon" />
                        </div>
                        {{ feature.name }}
                    </dt>
                    <dd class="mt-2 text-base leading-7">
                        {{ feature.description }}
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script setup lang="ts">
const features = [
    {
        name: 'Vorträge',
        description: 'mit Nigel Styles durch das Buch Josua',
        icon: 'streamline:interface-content-book-open-content-books-book-open',
    },
    {
        name: 'Workshop',
        description: 'in Feedback-Gruppen (Halten einer Kurzpredigt und anschließende Reflexion)',
        icon: 'streamline:interface-presentation-podium-work-desk-notes-company-presentation-office-podium-microphone',
    },
    {
        name: 'Freundschaften',
        description: 'unter werdenden Pastoren und Predigern',
        icon: 'fa6-regular:handshake',
    },
]
</script>
