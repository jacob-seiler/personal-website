// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
                { name: 'description', content: 'Personal website' }
            ],
            title: 'Jacob Seiler'
        }
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', '@nuxtjs/color-mode'],
    image: {
        provider: 'cloudinary',
        screens: {
            tiny: 430,
            sm: 640,
            md: 768
        },
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/dwp4w2mpq/image/upload/'
        }
    },
    colorMode: {
        classSuffix: ''
    }
})
