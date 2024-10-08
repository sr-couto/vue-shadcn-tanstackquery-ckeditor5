<script setup lang="ts">
import SelectAccion from '@/modules/articles/components/SelectAccion.vue';
import SheetPreview from '@/modules/articles/components/SheetPreview.vue';
import ResizablePreview from '@/modules/articles/components/ResizablePreview.vue';
import DialogEditTitle from "./DialogEditTitle.vue";
import { useDisplayManagerStore } from '@/modules/articles/stores/useDisplayManagerStore';
import { useEditorStore } from '@/modules/articles/stores/useEditorStore';
import { Button } from '@/modules/ui/button';
import { PencilRuler } from "lucide-vue-next";

const display_manager = useDisplayManagerStore();
const editor = useEditorStore();
</script>

<template>
  <div
    class="flex items-center justify-between w-full gap-2 mx-auto md:h-9"
  >
    <div class="flex items-center justify-between gap-2">
      <DialogEditTitle />
      <Button
        @click="display_manager.show_editor_toolbar = !display_manager.show_editor_toolbar"
        :variant="display_manager.show_editor_toolbar ? 'default' : 'secondary'"
        class="relative gap-2"
        size="sm"
      >
        <PencilRuler
          class="duration-300 size-4"
        />
        <span
          class="hidden @xl:inline-flex duration-300"
        >Barra herramientas</span>
      </Button>
    </div>
    <div
      class="flex items-center justify-between gap-2"
      :key="editor.editor_id"
    >
      <SelectAccion />
      <div
        v-if="editor.editor_id === ''"
        class="flex items-center justify-end w-full"
      >
        <SheetPreview create />
      </div>
      <template v-else>
        <div class="xl:hidden">
          <SheetPreview />
        </div>
        <div class="hidden xl:flex">
          <ResizablePreview />
        </div>
      </template>
    </div>
  </div>
</template>