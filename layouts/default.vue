<template>
    <div class="relative">
        <div
            class="fixed
                inset-x-0
                top-0
                z-10
                flex
                h-24
                items-center
                bg-base-100/50
                p-2
                text-primary-content
                backdrop-blur
                sm:p-4"
        >
            <div
                class="flex cursor-pointer"
                @click="scrollToTop()"
            >
                <logo class="h-16 fill-primary-content stroke-primary-content" />

                <logo-text />
            </div>

            <button
                class="ms-auto h-6 w-6 rounded-full bg-primary-content"
                aria-label="Toggle dark mode"
                @click="toggleDark()"
            />
        </div>

        <slot />
    </div>
</template>

<script setup lang="ts">
const isDark = useDark({
    selector: 'html',
    attribute: 'data-theme',
    valueDark: 'dark',
    valueLight: 'light',
})
const toggleDark = useToggle(isDark)

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}
</script>
