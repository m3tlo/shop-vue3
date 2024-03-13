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
      :current-page="pagination.page"
      :total-pages="pagination.pages"
      @update:current-page="setPage"
    />
  </section>
</template>

<script setup lang="ts">
import ProductItem from "@/components/ProductItem.vue";
import AppPagination from "@/components/app/AppPagination.vue";
import type { IPagination } from "@/types/global";
import type { IProduct } from "@/types/product";

const props = defineProps<{ products: IProduct[]; pagination: IPagination }>();
const emit = defineEmits(["change-page"]);

const setPage = async (page: number) => {
  if (page !== props.pagination.page) {
    emit("change-page", page);
  }
};
</script>

<style scoped></style>
