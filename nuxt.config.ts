// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image',
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        'nuxt-icon',
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'de',
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Ezra Workshop',
            link: [
                { rel: 'icon', type: 'image/png', href: '/img/favicon.png', },
            ],
            meta: [
                {
                    name: 'description',
                    content: 'Ezra existiert, um dich auszurüsten, Gottes Wort tiefer zu verstehen und treu weiterzugeben.',
                },
            ],
        },
    },
    googleFonts: {
        families: {
            Montserrat: {
                wght: [ 400, 500, 600, 700, 800, 900, ],
            },
        },
    },
    image: {

    },
})
