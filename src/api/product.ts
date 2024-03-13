import type { IProduct } from "@/types/product.ts"

interface IResponseProduct {
  product: IProduct
}

export const fetchProduct = async (
  productId: string
): Promise<IResponseProduct> => {
  try {
    const fetchResponse = await fetch(
      `https://vue-study.skillbox.cc/api/products/${productId}`
    )
    const response = await fetchResponse.json()
    const product: IProduct = response

    return {
      product: product,
    }
  } catch (error) {
    throw new Error("error")
  }
}
