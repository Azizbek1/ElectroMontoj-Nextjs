// export interface IPort {
//     image: string
//     title: string
//     link: string
//     id?: number,
// }


export interface Datum {
    id: number;
    name: string;
    text: string;
    file: string;
}

export interface IPort {
    items: Datum[];
}



