// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        'nuxt-icon',
    ],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Jungprediger Workshop',
            link: [
                { rel: 'icon', type: 'image/png', href: '/img/favicon.png', },
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
})
