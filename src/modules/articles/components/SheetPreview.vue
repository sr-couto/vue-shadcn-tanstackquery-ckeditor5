<script setup lang="ts">
import Button from '@/modules/ui/button/Button.vue';

import { useEditorStore } from '@/modules/articles/stores/useEditorStore';
const editor = useEditorStore();
const { editor_data } = storeToRefs(editor)

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/modules/ui/dialog'

import { storeToRefs } from 'pinia';
import { Eye } from 'lucide-vue-next';
import { ScrollArea } from '@/modules/ui/scroll-area';
import { ref } from 'vue';
import { Separator } from '@/modules/ui/separator';

const openSheet = ref(false)

const props = defineProps({
  create: {
    type: Boolean, // El tipo de dato que se espera recibir
    default: false, // El valor por defecto si no se proporciona ninguno
  },
});

function createNew() {
  editor.create_article()
  openSheet.value = false
}

</script>

<template>
  <Dialog v-model:open="openSheet">
    <DialogTrigger as-child>
      <Button
        v-if="props.create"
        class="gap-1 duration-300 "
        size="sm"
      >
        Publicar
      </Button>
      <Button
        v-else
        variant="secondary"
        :disabled="editor.editor_data === ''"
        size="sm"
        class="gap-2"
      >
        <Eye class="size-4" />
        <span class="hidden @xl:inline-flex">Previsualizar</span>
      </Button>
    </DialogTrigger>
    <DialogContent
      class="max-w-[90vw] md:max-w-[640px] w-full gap-0 max-h-[90dvh]"
    >
      <DialogHeader class="w-full px-2 mx-auto">
        <DialogTitle>
          {{ editor.editor_title ? editor.editor_title : 'Sin titulo' }}
        </DialogTitle>
        <DialogDescription>
          Previsualizar y revisar
        </DialogDescription>
      </DialogHeader>
      <ScrollArea 
        class="px-2 mt-4 overflow-y-auto"
        :class="props.create ? 'h-[60vh]' : 'h-[78dvh]'"
      >
        <div
          v-html="editor_data"
          class="max-w-full pr-0 mx-auto prose-sm prose dark:prose-invert CkeditorCreate"
        />
      </ScrollArea>
      <Separator
        v-if="props.create"
        class="my-3"
      />
      <DialogFooter
        class="px-2"
        v-if="props.create"
      >
        <DialogClose as-child>
          <Button
            variant="success"
            @click="createNew()"
          >
            Crear documento
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>