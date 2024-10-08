<script setup lang="ts">
import ChartArea from '@/modules/stadistics/components/ChartArea.vue';
import ChartBar from '@/modules/stadistics/components/ChartBar.vue';
</script>

<template>
  <div class="grid w-full gap-6 p-3 mx-auto bg-background">
    <div class="flex items-center justify-between w-full gap-2">
      <h2 class="text-xl">
        Estadisticas Unovis
      </h2>
    </div>
    <div class="grid w-full gap-12 mb-12 ">
      <ChartArea v-once />
      <div class="grid gap-12 md:grid-cols-2">
        <ChartBar v-once />
        <ChartBar v-once />
      </div>
    </div>
  </div>
</template>