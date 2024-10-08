<script setup lang="ts">
import EditorHeader from '@/modules/articles/components/EditorHeader.vue';
import EditorPanels from '../components/EditorPanels.vue';
</script>

<template>
  <div class="EditorContainer">
    <EditorHeader />
    <EditorPanels />
  </div>
</template>

<style scoped>
.EditorContainer {
  @apply h-[calc(100vh-3.75rem)] md:h-[calc(100vh-3rem)] w-full bg-primary;
}
</style>