<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/modules/app/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex items-center p-3 pt-0', props.class)">
    <slot />
  </div>
</template>
