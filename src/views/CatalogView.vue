<template>
    <div class="home">
      <div class="content__top content__top--catalog">
        <h1 class="content__title">
          Каталог
        </h1>
        <span class="content__info">
          {{ products.length }} товар
        </span>
      </div>
  
      <div class="content__catalog">
        <product-filter />
        <product-catalog
            :products="products"
        />
      </div>
    </div>
  </template>
  <script setup lang="ts">
    import ProductCatalog from '@/components/ProductCatalog.vue';
    import ProductFilter from '@/components/ProductFilter.vue';
    import ProductItem from '@/components/ProductItem.vue'
    
    import {ref} from 'vue'
    import {fetchProducts} from '@/api/product.ts'
    import type {IProduct} from '@/types/product.ts'

    const products = ref<IProduct[]>([])

    const loadProduct = async () => {
        const response = await fetchProducts()
        products.value = response
        console.log(response)
    }
  loadProduct()
  </script>
  
  
  