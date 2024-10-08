<script setup lang="ts">
import LucideCircleOff from '~icons/lucide/circle-off'
import LucideCircleArrowRight from '~icons/lucide/circle-arrow-right'
import LucideCircle from '~icons/lucide/circle'
import LucideCircleDotDashed from '~icons/lucide/circle-dot-dashed'
import LucideCircleCheckBig from '~icons/lucide/circle-check-big'
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/modules/ui/hover-card'


const props = defineProps({
  item: {
    type: Object,
    default() {
      return {};
    },
  },
});

</script>

<template>
  <div class="flex flex-row items-center justify-between w-full min-h-8">
    <p class="text-sm text-pretty group-data-[in-dialog]:!text-balance">
      {{ props.item?.title }}
    </p>
    <div
      v-if="props.item.status"
      class="flex items-center gap-2"
    >
      <HoverCard
        :close-delay="100"
        :open-delay="0"
      >
        <HoverCardTrigger>
          <div
            class="inline-flex items-center justify-center h-8 px-3 text-xs font-medium transition-colors rounded-md cursor-auto whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:opacity-80 hover:bg-accent hover:text-accent-foreground"
            v-auto-animate
            :key="props.item.status"
          >
            <LucideCircleOff
              v-if="props.item.status === 'archivar'"
              class="size-4"
            />
            <LucideCircle
              v-else-if="props.item.status === 'desarchivar'"
              class="size-4"
            />
            <LucideCircleArrowRight
              v-else-if="props.item.status === 'transferir'"
              class="size-4"
            />
            <LucideCircleCheckBig
              v-else-if="props.item.status === 'completado'"
              class="size-4"
            />
            <LucideCircleDotDashed
              v-else-if="props.item.status === 'pendiente'"
              class="size-4"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          class="w-auto p-2"
          :align="'center'"
          side="right"
        >
          <h4 class="text-xs font-semibold">
            Estado {{ props.item.status }}
          </h4>
        </HoverCardContent>
      </HoverCard>
    </div>
  </div>
</template>