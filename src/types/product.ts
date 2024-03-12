export interface IProduct {
    id: number,
    title: string,
    price: number,
    image:{
        file:{
            url: string,
            name: string
        }
    }
}