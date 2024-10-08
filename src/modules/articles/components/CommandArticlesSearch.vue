<script setup lang="ts">
import SvgSpinnersEclipseHalf from '~icons/svg-spinners/eclipse-half'
import LineMdAlertCircleTwotone from '~icons/line-md/alert-circle-twotone'
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/modules/ui/command'
import { useQuery } from '@tanstack/vue-query'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/modules/ui/hover-card'

import Badge from '@/modules/ui/badge/Badge.vue'
import { computed, watch } from 'vue'
import { makeConfetti } from '@/modules/app/lib/makeContetti'
import { useTransition } from '@vueuse/core'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/modules/ui/tooltip'
import CommandArticleItem from './CommandArticleItem.vue'
import { useEditorStore } from '../stores/useEditorStore'

const editor = useEditorStore();

const { data, isFetching, isError } = useQuery({
  queryKey: ['allArticles'],
  queryFn: async () => {
    const response = await fetch('/api/articulos')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  },
})

const duration = 500

const progressWidth = computed(() => {
  const completados = data.value?.filter((i: { status: string }) => i.status === 'completado').length ?? 0
  const total = data.value?.length ?? 0
  return (completados / total) * 100
})

const cubicBezierNumber = useTransition(progressWidth, {
  duration,
  transition: [0.75, 0, 0.25, 1],
})

watch(progressWidth, (newValue) => {
  if (newValue === 100) {
    setTimeout(() => {
      makeConfetti()
    }, 1400);
  }
})

const emit = defineEmits(["set"]);

function setArticle(item: any) {
  editor.set_article_editable(item)
  return emit('set')
}

</script>

<template>
  <Command :key="data">
    <div class="relative">
      <CommandInput placeholder="Filtrar" />
      <HoverCard>
        <HoverCardTrigger as-child>
          <Badge
            v-if="data"
            variant="outline"
            class="absolute top-2.5 right-2.5 gap-2"
          >
            {{ data?.length }}
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent
          class="p-3 w-44"
          :align="'center'"
          side="left"
        >
          <h4 class="text-xs font-medium text-center ">
            Cantidad de documentos
          </h4>
        </HoverCardContent>
      </HoverCard>
      <div
        v-if="isFetching"
        class="absolute top-0 flex gap-1 m-3 text-xs right-10"
      >
        <SvgSpinnersEclipseHalf class="size-4" />
      </div>
      <div
        v-else-if="isError"
        class="flex items-center justify-center w-full h-12 gap-2 text-xs bg-primary/20"
      >
        <LineMdAlertCircleTwotone class="size-6 text-primary" />
        Está viendo una versión sin actualizar
      </div>
    </div>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            class="relative w-full h-1 duration-1000 group bg-secondary"
          >
            <div
              class="h-1 duration-1000 bg-primary"
              :style="{ width: `${cubicBezierNumber?.toFixed(2)}%` }"
              :class="cubicBezierNumber?.toFixed() === '100' ? 'bg-success' : ''"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent
          :side="'bottom'"
        >
          <p>{{ cubicBezierNumber?.toFixed() }}% artículos completados</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <CommandList
      class="max-h-[600px]"
      v-if="data"
    >
      <CommandEmpty>Sin resultados</CommandEmpty>
      <CommandItem
        v-for="item in data"
        :key="item.id"
        :value="item?.title"
        class="w-full pr-1.5 active:!bg-primary/20"
        @click="setArticle(item.id)"
      >
        <CommandArticleItem :item="item" />
      </CommandItem>
      <CommandSeparator />
    </CommandList>
  </Command>
</template>