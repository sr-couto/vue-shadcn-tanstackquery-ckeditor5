<script setup lang="ts">
import Toaster from '@/modules/ui/toast/Toaster.vue'
import AppNavigation from '@/modules/app/components/AppNavigation.vue';
</script>

<template>
  <AppNavigation />
  <RouterView />
  <Toaster />
</template>
