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
const title = 'Jungprediger Workshop'
const description = 'Der Jungprediger-Workshop soll Pastoren in ihren ersten Dienstjahren ' +
    'und auch angehenden Pastoren und Laienpredigern helfen, Gottes Wort der Wahrheit ' +
    '„recht auszuteilen“.'

useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: '/img/full-logo.png',
    twitterCard: 'summary_large_image',
})

onMounted(() => {
    document.addEventListener('touchstart', () => {}, { passive: true, })
})
</script>
