<script setup lang="ts">
import Button from '@/modules/ui/button/Button.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="h-[calc(100vh-3rem)] flex justify-start flex-col items-center">
    <div class="flex flex-col items-center justify-start w-full max-w-xs gap-12 mx-auto mt-24">
      <div class="grid w-full gap-6">
        <Button
          as-child
          variant="secondary"
        >
          <RouterLink to="/editar-articulos">
            Crear articulos Ckeditor
          </RouterLink>
        </Button>
        <Button
          as-child
          variant="secondary"
        >
          <RouterLink to="/articulos">
            Articulos Grid
          </RouterLink>
        </Button>
      </div>
    </div>
  </div>
</template>