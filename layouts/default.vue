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
             bg-gradient-to-t
             from-transparent
             to-base-100
             p-4"
        >
            <logo class="h-16 fill-base-content stroke-base-content" />

            <logo-text />

            <button
                class="ms-auto h-6 w-6 rounded-full bg-base-content"
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
</script>
