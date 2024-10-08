<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
} from '@/modules/ui/card';
import Button from '@/modules/ui/button/Button.vue';
import { ScrollArea } from '@/modules/ui/scroll-area'
import LucideX from '~icons/lucide/x'
import { useDisplayManagerStore } from '@/modules/articles/stores/useDisplayManagerStore';
import { useEditorStore } from "@/modules/articles/stores/useEditorStore";
import { storeToRefs } from 'pinia';

const display_manager = useDisplayManagerStore();
const editor = useEditorStore();
const { editor_data } = storeToRefs(editor)
</script>

<template>
  <Card>
    <CardHeader class="pb-0">
      <div class="flex items-center justify-between w-full">
        <CardTitle>Previsualizar</CardTitle>
        <div class="flex items-center justify-between gap-2">
          <Button
            size="xs"
            variant="secondary"
            @click="display_manager.toggle_preview_panel()"
          >
            <LucideX />
          </Button>
        </div>
      </div>
    </CardHeader>
    <ScrollArea class="h-[calc(100vh-8rem)] @container CkeditorCreate CkeditorPreview w-full rounded-md  p-4">
      <article
        class="max-w-[40ch] @lg:max-w-[72ch] @lg:px-12 pt-6 pb-12 mx-auto font-serif prose-sm prose text-pretty dark:prose-invert"
        v-html="editor_data"
      />
    </ScrollArea>
  </Card>
</template>

<style scoped>
.CkeditorPreview :deep(p) {
  @apply break-words @lg:text-justify;
  hyphens: auto;
}

.CkeditorCreate :deep(h1),
.CkeditorCreate :deep(h2),
.CkeditorCreate :deep(h3),
.CkeditorCreate :deep(h4),
.CkeditorCreate :deep(h5),
.CkeditorCreate :deep(h6) {
  @apply text-balance text-left
}
</style>