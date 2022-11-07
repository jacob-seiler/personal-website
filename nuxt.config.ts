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
            title: 'Jacob Seiler',
            link: [
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'manifest', href: '/site.webmanifest' }
            ]
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
