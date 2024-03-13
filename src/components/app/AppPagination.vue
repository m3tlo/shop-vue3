<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        :class="{ 'pagination__link--disabled': currentPage === 1 }"
        aria-label="Предыдущая страница"
        class="pagination__link pagination__link--arrow"
        href="#"
        @click.prevent="prevPage"
      >
        <svg
          fill="currentColor"
          height="14"
          width="8"
        >
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>

    <li
      v-for="page in totalPages"
      :key="page"
      class="pagination__item"
    >
      <a
        :class="{ 'pagination__link--current': currentPage === page }"
        class="pagination__link"
        href="#"
        @click.prevent="goToPage(page)"
      >
        {{ page }}
      </a>
    </li>

    <li class="pagination__item">
      <a
        :class="{ 'pagination__link--disabled': currentPage === totalPages }"
        aria-label="Следующая страница"
        class="pagination__link pagination__link--arrow"
        href="#"
        @click.prevent="nextPage"
      >
        <svg
          fill="currentColor"
          height="14"
          width="8"
        >
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  totalPages: number
  currentPage: number
}>()

const emit = defineEmits(["update:current-page"])

const prevPage = () => {
  if (props.currentPage > 1) {
    goToPage(props.currentPage - 1)
  }
}

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    goToPage(props.currentPage + 1)
  }
}

const goToPage = (page: number) => {
  emit("update:current-page", page)
}
</script>

<style scoped></style>
