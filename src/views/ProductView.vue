<template>
  <div>
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link to="/">
            <a
              class="breadcrumbs__link"
              href="index.html"
            >
              Каталог
            </a>
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link to="/">
            <a
              class="breadcrumbs__link"
              href="#"
            >
              <!-- {{ category }} -->
              Category
            </a>
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            {{ product.title }}
          </a>
        </li>
      </ul>
    </div>
    <section class="item">
      <div class="item__pics pics">
        <div class="pics__wrapper">
          <img
            :src="product.image.file.url"
            alt="Название товара"
            height="570"
            width="570"
          />
        </div>
        <ul class="pics__list">
          <li class="pics__item">
            <a
              class="pics__link pics__link--current"
              href=""
            >
              <img
                :src="product.image.file.url"
                :srcset="product.image.file.url"
                alt="Название товара"
                height="98"
                width="98"
              />
            </a>
          </li>
          <li class="pics__item">
            <a
              class="pics__link"
              href=""
            >
              <img
                :src="product.image.file.url"
                :srcset="product.image.file.url"
                alt="Название товара"
                height="98"
                width="98"
              />
            </a>
          </li>
          <li class="pics__item">
            <a
              class="pics__link"
              href=""
            >
              <img
                :src="product.image.file.url"
                :srcset="product.image.file.url"
                alt="Название товара"
                height="98"
                width="98"
              />
            </a>
          </li>
          <li class="pics__item">
            <a
              class="pics__link"
              href="#"
            >
              <img
                :src="product.image.file.url"
                :srcset="product.image.file.url"
                alt="Название товара"
                height="98"
                width="98"
              />
            </a>
          </li>
        </ul>
      </div>

      <div class="item__info">
        <span class="item__code">Артикул: {{ product.id }}</span>
        <h2 class="item__title">
          {{ product.title }}
        </h2>
        <div class="item__form">
          <form
            action="#"
            class="form"
            method="POST"
          >
            <b class="item__price"> {{ product.price }}₽ </b>

            <!-- <fieldset class="form__block">
              <legend class="form__legend">Цвет:</legend>
              <ul class="colors">
                <li
                  v-for="color in product.colors"
                  :key="color.name"
                  class="colors__item"
                >
                  <label class="colors__label">
                    <input
                      v-model="currentColor"
                      :value="color.name"
                      class="colors__radio sr-only"
                      type="radio"
                    />
                    <span
                      :style="{ backgroundColor: color.color }"
                      class="colors__value"
                      style=""
                    >
                    </span>
                  </label>
                </li>
              </ul>
            </fieldset> -->

            <!-- <fieldset
              v-if="product.memory"
              class="form__block"
            >
              <legend class="form__legend">Объемб в ГБ:</legend>
              <ul class="sizes sizes--primery">
                <li
                  v-for="memory in product.memory"
                  :key="memory"
                  class="sizes__item"
                >
                  <label class="sizes__label">
                    <input
                      :value="memory"
                      class="sizes__radio sr-only"
                      name="sizes-item"
                      type="radio"
                    />
                    <span class="sizes__value"> {{ memory }}GB </span>
                  </label>
                </li>
              </ul>
            </fieldset> -->

            <!-- <div class="item__row">
              <div class="form__counter">
                <button
                  aria-label="Убрать один товар"
                  type="button"
                  @click.prevent="decrementCount"
                >
                  <svg
                    fill="currentColor"
                    height="12"
                    width="12"
                  >
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input
                  v-model.number="productCount"
                  min="0"
                  name="count"
                  type="text"
                />

                <button
                  aria-label="Добавить один товар"
                  type="button"
                  @click.prevent="incrementCount"
                >
                  <svg
                    fill="currentColor"
                    height="12"
                    width="12"
                  >
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <button
                class="button button--primery"
                type="submit"
              >
                В корзину
              </button>
            </div> -->
          </form>
        </div>
      </div>

      <!-- <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current"> Описание </a>
          </li>
          <li class="tabs__item">
            <a
              class="tabs__link"
              href="#"
            >
              Характеристики
            </a>
          </li>
          <li class="tabs__item">
            <a
              class="tabs__link"
              href="#"
            >
              Гарантия
            </a>
          </li>
          <li class="tabs__item">
            <a
              class="tabs__link"
              href="#"
            >
              Оплата и доставка
            </a>
          </li>
        </ul>

        <div class="item__content">
          <p>
            {{ product.shortDescription }}
          </p>

          <a href="#"> Все характеристики </a>

          <h3>Что это?</h3>

          <p>
            {{ product.description }}
          </p>

          <h3>Дизайн</h3>

          <p>
            {{ product.design }}
          </p>
        </div>
      </div> -->
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
import { fetchProduct } from "@/api/product"
import type { IProduct } from "@/types/product"

const route = useRoute()

const product = ref<IProduct>({
  id: 1,
  title: "",
  price: 0,
  image: {
    file: {
      url: "",
      name: "",
    },
  },
})

const loadProduct = async (id: string) => {
  const response = await fetchProduct(id)
  product.value = response.product
  console.log(response.product)
}
loadProduct(String(route.params.id))
</script>

<style scoped>
.form__counter button {
  cursor: pointer;
}
</style>
