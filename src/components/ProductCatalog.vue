<template>
  <section class="catalog">
    <ul class="catalog__list">
      <product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
  </ul>
    <app-pagination
      v-model="page"
      :count="countProducts"
      :per-page="productsPerPage"
    />
  </section>
</template>

<script setup lang="ts">
import ProductItem from '@/components/ProductItem.vue'
import type {IProduct} from "@/types/product";

const props = defineProps<{ products: IProduct[] }>()
</script>

<style scoped>

</style>
