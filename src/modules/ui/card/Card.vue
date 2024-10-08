<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/modules/app/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-md relative border bg-card text-card-foreground shadow',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
