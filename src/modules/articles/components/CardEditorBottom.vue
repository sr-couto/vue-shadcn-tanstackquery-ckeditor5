<script setup lang="ts">
import { Button } from '@/modules/ui/button';
import { useEditorStore } from "@/modules/articles/stores/useEditorStore";

const editor = useEditorStore();
</script>

<template>
  <div
    class="relative flex items-center justify-between px-2 @4xl:px-0 w-full max-w-3xl gap-2 mx-auto"
    v-if="editor.editor_id !== ''"
  >
    <Button
      variant="destructive"
      size="sm"
      @click="editor.delete_article()"
      class="gap-1"
    >
      Eliminar documento
    </Button>
    <Button
      variant="success" 
      @click="editor.update_article()"
      :disabled="!editor.editor_title"
      size="sm"
      class="gap-1"
    >
      Guardar cambios
    </Button>
  </div>
</template>