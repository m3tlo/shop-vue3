<template>
  <div class="home">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> {{ products.length }} товар </span>
    </div>

    <div class="content__catalog">
      <product-filter
        :products="products"
        @get-filter="filterProducts"
      />
      <product-catalog
        :products="products"
        :pagination="pagination"
        @change-page="changePage"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import ProductCatalog from "@/components/ProductCatalog.vue"
import ProductFilter from "@/components/ProductFilter.vue"

import { ref } from "vue"
import { fetchProducts } from "@/api/products.ts"
import type { IProduct } from "@/types/product.ts"
import type { IPagination } from "@/types/global.ts"

const products = ref<IProduct[]>([])
const pagination = ref<IPagination>({
  page: 1,
  pages: 0,
  total: 0,
})

const loadProduct = async (page: number) => {
  const response = await fetchProducts(page)
  products.value = response.products
  pagination.value = response.pagination
}
loadProduct(pagination.value.page)

const filterProducts = (newList: IProduct[]) => {
  products.value = newList
  console.log("here", newList)
}

const changePage = async (page: number) => {
  await loadProduct(page)
  console.log(page)
}
</script>
@/api/products@/api/products
