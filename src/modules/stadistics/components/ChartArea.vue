<script setup lang="ts">
import { AreaChart } from "@/modules/ui/chart-area";

const data = [
  {
    name: "Ene 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Feb 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Mar 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Abr 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "May 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jun 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jul 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Ene 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Feb 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Mar 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Abr 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "May 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jun 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jul 2024",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },

  {
    name: "Ene 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Feb 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Mar 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Abr 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "May 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jun 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jul 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Ene 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Feb 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Mar 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Abr 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "May 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jun 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jul 2025",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
    real: Math.floor(Math.random() * 2000) + 500,
  },
];
</script>

<template>
  <AreaChart
    :data="data"
    index="name"
    class="h-80"
    :categories="['total', 'predicted', 'real']"
  />
</template>
