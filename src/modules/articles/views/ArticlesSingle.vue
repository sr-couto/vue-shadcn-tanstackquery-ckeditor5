<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import LucideArrowLeft from '~icons/lucide/arrow-left'
import SvgSpinnersEclipseHalf from '~icons/svg-spinners/eclipse-half'
import type { Article } from "@/modules/articles/types"

const route = useRoute();
const article_id = route.params.id;

const state = reactive({
  article: {} as Article,
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get(`/api/articulos/${article_id}`);
    state.article = response.data;
  } catch (error) {
    console.error('Error fetching job', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section
    v-if="!state.isLoading"
    class="min-h-screen bg-background "
  >
    <div class="flex items-center justify-between max-w-2xl px-2 mx-auto my-6">
      <RouterLink
        to="/articulos"
        class="flex items-center gap-2 mb-3 text-lg underline text-primary underline-offset-2"
      >
        <LucideArrowLeft /> Todos los artículos
      </RouterLink>
      <RouterLink
        to="/editar-articulos"
        class="flex items-center gap-2 mb-3 text-lg underline text-primary underline-offset-2"
      >
        Editar
      </RouterLink>
    </div>
    <article class="w-full max-w-2xl gap-3 px-3 mx-auto prose md:prose-lg dark:prose-invert">
      <h1>{{ state.article?.title }}</h1>
      <div v-html="state.article?.body" />
    </article>
  </section>
  <div
    v-else
    class="flex flex-col items-center justify-center w-full h-96"
  >
    <SvgSpinnersEclipseHalf class="w-12 h-12" />
    <span>Loading</span>
  </div>
</template>
