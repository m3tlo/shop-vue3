<template>
  <div>
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <button
       v-for="page in totalPages"
       :key="page"
       @click="goToPage(page)"
       :class="{ 'active': currentPage === page }"
    >
      {{ page }}
    </button>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
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
.active {
  background-color: #007bff;
  color: white;
}
</style>
