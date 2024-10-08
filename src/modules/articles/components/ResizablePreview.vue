<script setup lang="ts">
import Button from '@/modules/ui/button/Button.vue';
import { useDisplayManagerStore } from "@/modules/articles/stores/useDisplayManagerStore";
import { useEditorStore } from "@/modules/articles/stores/useEditorStore";
const display_manager = useDisplayManagerStore();
const editor = useEditorStore();

import { Eye } from 'lucide-vue-next';
</script>
<template>
  <Button
    @click="display_manager.toggle_preview_panel()"
    :disabled="editor.editor_data === ''"
    :variant="display_manager.show_preview_panel ? 'default' : 'secondary'"
    size="sm"
    class="gap-2"
  >
    <span
      v-show="!display_manager.show_preview_panel"
      class="hidden @xl:inline-flex"
    >Previsualizar</span>
    <Eye class="size-4" />
  </Button>
</template>