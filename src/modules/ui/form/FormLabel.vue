<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import type { LabelProps } from 'radix-vue'
import { useFormField } from './useFormField'
import { cn } from '@/modules/app/lib/utils'
import { Label } from '@/modules/ui/label'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const { error, formItemId } = useFormField()
</script>

<template>
  <Label
    :class="cn(
      error && 'text-destructive',
      props.class,
    )"
    :for="formItemId"
  >
    <slot />
  </Label>
</template>
