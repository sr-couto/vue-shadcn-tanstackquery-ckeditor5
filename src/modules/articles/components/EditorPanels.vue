<script setup lang="ts">
import { useDisplayManagerStore } from '@/modules/articles/stores/useDisplayManagerStore';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/modules/ui/resizable'

import CardPreview from '@/modules/articles/components/CardPreview.vue';
import CardEditor from '@/modules/articles/components/CardEditor.vue';
import CardArticlesList from '@/modules/articles/components/CardArticlesList.vue';

const display_manager = useDisplayManagerStore();
</script>

<template>
  <div class="EditorPanels">
    <CardArticlesList
      v-show="display_manager.show_documentacion_en_curso"
      class="w-full sm:w-[320px] shrink-0"
      :class="{ 'fixed z-50 left-0.5 bottom-1.5 ring-1 ring-primary': display_manager.fixed_documentacion_en_curso }"
    />
    <ResizablePanelGroup
      id="handle-demo-group-1"
      direction="horizontal"
      class="h-[calc(100vh-7rem)]"
    >
      <ResizablePanel
        :default-size="70"
        :min-size="40"
        :max-size="70"
      >
        <CardEditor />
      </ResizablePanel>
      <ResizableHandle v-show="display_manager.show_preview_panel" />
      <ResizablePanel
        :default-size="30"
        :min-size="30"
        :max-size="60"
        class="hidden md:block"
        v-show="display_manager.show_preview_panel"
      >
        <!-- Panel Previsualización -->
        <CardPreview />
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style scoped>
.EditorPanels {
  @apply flex w-full pt-0.5 px-0.5 md:px-1 h-[calc(100vh-8.8rem)] md:h-[calc(100vh-5.8rem)] bg-muted gap-1;
}
</style>