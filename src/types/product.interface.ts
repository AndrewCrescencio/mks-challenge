export interface IProductData {
    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: string
}

export interface IProductDataResponse {
    products: IProductData[],
    count?: number,
}