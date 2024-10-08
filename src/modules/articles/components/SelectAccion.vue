<script setup lang="ts">

import LucideCircleArrowRight from '~icons/lucide/circle-arrow-right'
import LucideCircleOff from '~icons/lucide/circle-off'
import LucideCircle from '~icons/lucide/circle'
import LucideCircleDotDashed from '~icons/lucide/circle-dot-dashed'
import LucideCircleCheckBig from '~icons/lucide/circle-check-big'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/modules/ui/select'
// import Button from '@/modules/ui/button/Button.vue';
import { useEditorStore } from "@/modules/articles/stores/useEditorStore";
import { useDisplayManagerStore } from "@/modules/articles/stores/useDisplayManagerStore";

import { storeToRefs } from 'pinia';
import { watch } from 'vue'

const display_manager = useDisplayManagerStore();
const editor = useEditorStore();
const { show_status } = storeToRefs(display_manager)
const { editor_status } = storeToRefs(editor)


watch(editor_status, (newVal) => {
  if (newVal?.length === 0) return
  editor.set_status()
})

</script>

<template>
  <div
    class="flex items-center gap-1"
    :class="show_status ? '' : 'hidden'"
  >
    <Select v-model="editor_status">
      <SelectTrigger class="w-[140px] md:w-[150px] h-8 cursor-default">
        <SelectValue
          placeholder="Seleccionar&hellip;"
          class="text-sm"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Estados</SelectLabel>
          <SelectItem value="completado">
            <span class="flex items-center gap-2 text-xs">
              <LucideCircleCheckBig class="size-4" /> Completado
            </span>
          </SelectItem>
          <SelectItem value="pendiente">
            <span class="flex items-center gap-2 text-xs">
              <LucideCircleDotDashed class="size-4" /> Pendiente
            </span>
          </SelectItem>
          <SelectItem value="transferir">
            <span class="flex items-center gap-2 text-xs">
              <LucideCircleArrowRight class="size-4" /> Transferir
            </span>
          </SelectItem>
          <SelectItem value="archivar">
            <span class="flex items-center gap-2 text-xs">
              <LucideCircleOff class="size-4" /> Archivar
            </span>
          </SelectItem>
          <SelectItem value="desarchivar">
            <span class="flex items-center gap-2 text-xs">
              <LucideCircle class="size-4" /> Desarchivar
            </span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <!-- <Button
      @click="editor.set_status()"
      variant="secondary"
      size="sm"
      :disabled="editor_status?.length === 0"
    >
      Cambiar
    </Button> -->
  </div>
</template>