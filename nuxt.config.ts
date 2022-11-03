// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                { charset: 'utf-8' },
                { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
            ],
            title: 'Jacob Seiler'
        }
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', '@nuxtjs/color-mode'],
    image: {
        dir: 'assets/images'
    },
    colorMode: {
        classSuffix: ''
    }
})
