<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        :class="{'pagination__link--disabled': page === 1}"
        aria-label="Предыдущая страница"
        class="pagination__link pagination__link--arrow"
        href="#"
        @click.prevent="paginateArrow('down')"
      >
        <svg fill="currentColor" height="14" width="8">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>

    <li
      v-for="pageNum in pages"
      :key="pageNum"
      class="pagination__item"
    >
      <a
        :class="{'pagination__link--current': pageNum === page}"
        class="pagination__link"
        href="#"
        @click.prevent="paginate(pageNum)"
      >
        {{ pageNum }}
      </a>
    </li>

    <li class="pagination__item">
      <a
        :class="{'pagination__link--disabled': page === pages}"
        aria-label="Следующая страница"
        class="pagination__link pagination__link--arrow"
        href="#"
        @click.prevent="paginateArrow('up')">
        <svg fill="currentColor" height="14" width="8">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  totalPages: number,
  currentPage: number,
}>()


const emit = defineEmits(["update:current-page"])

const prevPage = () => {
  if (props.currentPage > 1) {
      goToPage(props.currentPage - 1)
  }
};

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
      goToPage(props.currentPage + 1)
  }
};

const goToPage = (page) => {
  emit("update:current-page", page)
};
</script>

<style scoped>

</style>
