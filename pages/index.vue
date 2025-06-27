<template>
    <div>
        <landing-hero />

        <landing-description />

        <landing-features />

        <landing-cta />

        <landing-people />

        <landing-group-picture />

        <landing-networks />

        <landing-newsletter />

        <landing-footer />
    </div>
</template>

<script setup lang="ts">
const title = 'Ezra Workshop'
const description = 'Ezra existiert, um dich auszurüsten, ' +
    'Gottes Wort tiefer zu verstehen und treu weiterzugeben.'

useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: '/img/hauptlogo-dunkelblau.png',
    twitterCard: 'summary_large_image',
})

onMounted(() => {
    document.addEventListener('touchstart', () => {}, { passive: true, })
})
</script>
