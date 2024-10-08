<script setup lang="ts">
import { useDisplayManagerStore } from '@/modules/articles/stores/useDisplayManagerStore';
import { useEditorStore } from "@/modules/articles/stores/useEditorStore";
import { ChevronRight, ListCheck } from 'lucide-vue-next';
const display_manager = useDisplayManagerStore();
const editor = useEditorStore();
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/modules/ui/tooltip'
import SheetSearch from '@/modules/articles/components/SheetSearch.vue';
import { Button } from "@/modules/ui/button";
</script>

<template>
  <div class="dashboardHeader">
    <div class="flex items-center justify-between w-full gap-3 md:justify-start">
      <SheetSearch />
      <div class="justify-start hidden lg:flex">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button 
                :variant="display_manager.show_documentacion_en_curso ? 'default' : 'secondary'"
                size="sm"
                class="gap-2"
                @click="display_manager.show_documentacion_en_curso = !display_manager.show_documentacion_en_curso"
              >
                <ListCheck class="size-4" />
                <span>Todos los artículos</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent :side="'bottom'">
              <p>Ver articulos en curso</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <ChevronRight class="hidden md:flex size-3 mt-0.5" />
      <div class="hidden md:flex">
        <transition mode="out-in">
          <h1
            class="text-lg truncate max-w-[60vw]"
            :key="editor?.editor_title"
          >
            <span v-show="editor.editor_title">
              {{ editor?.editor_title }}
            </span>
            <span
              v-if="editor.editor_title === ''"
              class="opacity-50"
            >
              sin titulo
            </span>
          </h1>
        </transition>
      </div>
      <Button
        variant="success"
        class="md:hidden"
        size="sm"
        @click="editor.reset_editor_data()"
      >
        Nuevo articulo
      </Button>
    </div>
    <div class="flex items-end justify-between w-full gap-2 px-1 md:w-auto md:px-0">
      <div class="md:hidden">
        <transition mode="out-in">
          <h1
            class="text-2xl truncate max-w-[90vw]"
            :key="editor?.editor_title"
          >
            <span v-show="editor.editor_title">
              {{ editor?.editor_title }}
            </span>
            <span
              v-if="editor.editor_title === ''"
              class="opacity-50"
            >
              sin titulo
            </span>
          </h1>
        </transition>
      </div>
      <div class="flex gap-2">
        <Button
          variant="success"
          class="hidden md:flex"
          size="sm"
          @click="editor.reset_editor_data()"
        >
          Nuevo articulo
        </Button>
      </div>
    </div>
  </div>
</template>

<style>
.dashboardHeader {
  @apply flex justify-between md:h-[2.75rem] md:flex-row flex-col gap-3 items-center px-1.5 md:px-2 py-2 md:py-0 bg-card text-secondary-foreground
}
</style>