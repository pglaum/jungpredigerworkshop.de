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
            htmlAttrs: {
                lang: 'de',
            },
            bodyAttrs: {
                ontouchstart: '',
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Jungprediger Workshop',
            link: [
                { rel: 'icon', type: 'image/png', href: '/img/favicon.png', },
            ],
            meta: [
                {
                    name: 'description',
                    content: 'Der Jungprediger-Workshop soll Pastoren in ihren ersten Dienstjahren ' +
                        'und auch angehenden Pastoren und Laienpredigern helfen, Gottes Wort der Wahrheit ' +
                        '„recht auszuteilen“.',
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
})
