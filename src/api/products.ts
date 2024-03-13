import type { IPagination } from "@/types/global"
import type { IProduct } from "@/types/product.ts"
export type {IPagination} from '@/types/global.ts'

interface IResponseProducts {
    products:IProduct[],
    pagination: IPagination
}

export  const fetchProducts = async (page: number): Promise<IResponseProducts> => {
    try {
        const query = new URLSearchParams({
            page: String(page),
            limit: String(8)
        })

        const fetchResponse = await fetch(`https://vue-study.skillbox.cc/api/products?${query}`)
        const response = await fetchResponse.json()
        const products: IProduct[] = response.items
        
        return {
            products: products,
            pagination: response.pagination
        }


    } catch (error) {
        throw new Error('error')
        
    }
}