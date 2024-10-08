<script setup lang="ts">
import Button from '@/modules/ui/button/Button.vue';
import ArticlesCommandSearch from './CommandArticlesSearch.vue';
import { ListCheck } from 'lucide-vue-next';
import { ref } from 'vue';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/modules/ui/dialog'
import { ScrollArea } from '@/modules/ui/scroll-area';
const openDialog = ref(false)
import { useMagicKeys } from '@vueuse/core'
import { watch } from 'vue';
const keys = useMagicKeys()
const CtrlComma = keys['Ctrl+,']

function toggleDialog() {
  openDialog.value = !openDialog.value
}

watch(CtrlComma, (v) => {
  if (v)
    toggleDialog()
})

</script>

<template>
  <Dialog v-model:open="openDialog">
    <DialogTrigger
      as-child
      class="lg:hidden"
    >
      <Button
        size="sm"
        variant="secondary"
        class="gap-2"
      >
        <ListCheck class="size-4" />
        <span>Todos los artículos</span>
      </Button>
    </DialogTrigger>
    <DialogContent class="max-h-[90dvh] max-w-[90vw] md:max-w-lg p-0 pt-2">
      <DialogHeader class="p-2 pb-0">
        <DialogTitle>Articulos</DialogTitle>
        <DialogDescription>
          Listado de articulos.
        </DialogDescription>
      </DialogHeader>
      <ScrollArea
        data-in-dialog
        class="w-full border bg-background overflow-y-auto h-[70dvh] group"
      >
        <ArticlesCommandSearch @set="toggleDialog" />
      </ScrollArea>
    </DialogContent>
  </Dialog>
</template>