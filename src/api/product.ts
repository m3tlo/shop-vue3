import type { IProduct } from "@/types/product.ts"

export  const fetchProducts = async (): Promise<IProduct[]> => {
    try {
        const fetchResponse = await fetch('https://vue-study.skillbox.cc/api/products')
        const response = await fetchResponse.json()
        const products: IProduct[] = response.items
        
        return products

    } catch (error) {
        throw new Error('error')
        
    }
}