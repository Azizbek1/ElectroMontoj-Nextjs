import { ISliders } from "./slider.types";
import slide1 from '@/assets/jpg/electric-slide-1_1920x610_1ab.jpg'
import slide2 from '@/assets/jpg/electric-slide-2_1920x610_1ab.jpg'
import slide3 from '@/assets/jpg/electric-slide-3_1920x610_1ab.jpg'
export const sliders: ISliders[] = [
    { id: 0, title: "Электрика под ключ в Ташкенте и Ташкентской области", text: "Гарантия 10 лет на работы и материалы", images: slide1 },
    { id: 1, title: "Гарантия лучшей цены на услуги в Узбекистане", text: "Ремонт любой сложности от утюга до промышленного станка", images: slide2 },
    { id: 2, title: "Замена, установка счетчика 200 000 сум", text: "Только 7 дней скидка 30%", images: slide3 },
]