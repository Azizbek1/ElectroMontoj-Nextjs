import { IMenu, IMenuAddrePhone, IMenuAdress } from "./nav.types"

export const menus: IMenu = {
    items: [
        {
            id: 1,
            icon: 'MdHome',
            link: '/',
            title: 'Главная',
        },
        {
            id: 2,
            icon: 'MdRecycling',
            link: '/about',
            title: 'О Компании',
        },
        {
            id: 3,
            icon: 'MdLocalFireDepartment',
            link: '/coments',
            title: 'Отзывы',
        },
        {
            id: 4,
            icon: 'MdOutlineLocalPhone',
            link: '/contact',
            title: 'Контакты',
        },
    ],
}

export const address: IMenuAdress = {
    items: [
        { id: 1, icon: 'MdLocalLibrary', title: "г. Ташкент, ул. Калужская, 80, офис 315" },
    ]
}

export const addressPhone: IMenuAddrePhone = {
    items: [
        { id: 1, icon: "MdOutlineLocalPhone", title: "998 (90) 985 12 45" }
    ]
}