<template>
    <div class="relative">
        <button
            class="absolute right-0 top-0 z-10 m-4 h-6 w-6 rounded-full bg-base-content"
            @click="toggleDark()"
        />

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
