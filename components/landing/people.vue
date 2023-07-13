<template>
    <div class="py-20">
        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div class="max-w-2xl">
                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                    Unser Leitungskreis
                </h2>
                <p class="mt-6 hidden text-lg leading-8">
                    Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
                </p>
            </div>
            <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                <li v-for="person in people" :key="person.name">
                    <div class="flex items-center gap-x-6">
                        <nuxt-img
                            v-if="person.image"
                            :src="person.image"
                            :alt="person.name"
                            class="h-16 w-16 min-w-[4rem] rounded-full object-cover"
                            height="128"
                            width="128"
                            densities="x1 x2"
                        />
                        <div
                            v-else
                            class="flex
                             h-16
                             w-16
                             min-w-[4rem]
                             items-center
                             justify-center
                             rounded-full
                             bg-san-juan
                             text-white"
                        >
                            <icon name="streamline:interface-user-profile-focus-close-geometric-human-person-profile-focus-user" size="32" />
                        </div>
                        <div>
                            <h3 class="text-base font-semibold leading-7 tracking-tight">
                                {{ person.name }}
                            </h3>
                            <p class="text-sm font-semibold leading-6">
                                {{ person.about }}
                                <a
                                    :href="person.href"
                                    class="group"
                                    target="_blank"
                                >
                                    <span class="group-hover:underline">
                                        {{ person.church }}
                                    </span>
                                    <icon name="streamline:interface-arrows-expand-5-expand-small-bigger-retract-smaller-big" class="ms-1" />
                                </a>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const people = [
    {
        image: '/pr/fabian-bromann.jpg',
        name: 'Fabian Bromann',
        about: 'Jahrgang 1991, Pastor der',
        church: 'EFG Schwülper',
        href: 'https://efg-schwuelper.de/index.php',
    },
    {
        image: '/pr/emil-grundmann.jpg',
        name: 'Emil Grundmann',
        about: 'Jahrgang 1990, Pastor der',
        church: 'Nordstern Kirche Frankfurt/Main',
        href: 'https://www.nordstern-frankfurt.de/',
    },
    {
        image: '/pr/alexander-heistermann.jpg',
        name: 'Alexander Heistermann',
        about: 'Jahrgang 1991, Pastor der',
        church: 'FeG Hamburg-Farmsen',
        href: 'https://www.feg-farmsen.de/',
    },
    {
        image: '/pr/jonathan-malisi.jpg',
        name: 'Jonathan Malisi',
        about: 'Jahrgang 1996, Pastor der',
        church: 'Immanuel-Gemeinde Wetzlar',
        href: 'https://immanuel-wetzlar.de',
    },
    {
        image: '/pr/joseph-mcmahon.jpeg',
        name: 'Joseph McMahon',
        about: 'Jahrgang 1991, Pastor der',
        church: 'Stadtmission Nidda',
        href: 'https://wonderl.ink/@stadtmission-nidda',
    },
    {
        image: '/pr/larry-norman-1.png',
        name: 'Larry Norman',
        about: 'Jahrgang 1987, Assistant Pastor der',
        church: 'Leipzig English Church',
        href: 'https://leipzig.english.church/de/',
    },
]
</script>
