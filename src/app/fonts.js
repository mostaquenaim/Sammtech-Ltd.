import { Bebas_Neue, Inter, Roboto_Condensed, Roboto_Slab } from "next/font/google";

export const roboto_condensed = Roboto_Condensed({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const bebas = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})

export const roboto_slab = Roboto_Slab({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
})

const inter = Inter({ subsets: ["latin"] });
