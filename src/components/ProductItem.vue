<template>
  <li
    :class="[
      'catalog__item',
      { 'catalog__item-with-small-price': propsIsSmall },
    ]"
  >
    <a
      @click.prevent="$router.push('/product/' + product.id)"
      class="catalog__item-pic"
      href="#"
    >
      <img
        class="catalog__item-pic"
        :alt="product.title"
        :src="product.image.file.url"
      />
    </a>

    <div class="catalog__item-body">
      <h3 class="catalog__item-title">
        <a
          @click.prevent="$router.push('/product/' + product.id)"
          href="#"
        >
          {{ product.title }}
        </a>
      </h3>

      <span
        :class="[
          'catalog__item-price',
          { 'catalog__item-text-with-small-price': propsIsSmall },
        ]"
      >
        {{ product.price }} ₽</span
      >
    </div>

    <!-- <ul class="colors">
      <AppColorSelect
        :product="product"
        :color="color"
      />

    </ul> -->
  </li>
</template>

<script setup lang="ts">
import type { IProduct } from "@/types/product"
import { computed, ref } from "vue"

const props = defineProps<{ product: IProduct }>()

const showSmallPriceClass = ref(false)

const propsIsSmall = computed(() => {
  return props.product.price !== undefined && props.product.price < 5000
})
</script>

<style scoped>
.catalog__item {
  width: 200px;
  margin: 10px;
  border: 1px solid transparent;
  border-radius: 6px;
}
.catalog__item-with-small-price {
  border: 1px solid #027502;
}
.catalog__item-pic {
  width: 100%;
  height: 250px;
  object-fit: contain;
  background-color: white;
  border-radius: 6px 6px 0 0;
}
.catalog__item-title {
  a {
    color: #000 !important;
  }
  font-size: 1.25rem;
  font-weight: 700;
}
.catalog__item-price {
  font-size: 1rem;
}
.catalog__item-text-with-small-price {
  color: #027502;
}
.catalog__item-body {
  padding: 4px;
}
h5 {
  margin: 16px 0;
}
</style>
