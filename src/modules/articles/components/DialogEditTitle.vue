<script setup lang="ts">
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/modules/ui/alert-dialog'
import { Button } from '@/modules/ui/button'

import { Input } from '@/modules/ui/input'
import { useEditorStore } from "@/modules/articles/stores/useEditorStore";
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { LucideSquarePen } from 'lucide-vue-next'

const editor = useEditorStore();
const { editor_title } = storeToRefs(editor)
const expedienteTitle = ref(editor_title);
const open = ref(false)

function openModal() {
  open.value = true
}

function change_title() {
  editor.change_editor_title(expedienteTitle.value)
  open.value = false
}
</script>

<template>
  <AlertDialog v-model:open="open">
    <AlertDialogTrigger as-child>
      <Button
        variant="secondary"
        size="sm"
        @click="openModal"
      >
        <span
          class="flex items-center gap-2"
        >
          <LucideSquarePen class="size-4" />
          <span>
            Editar titulo
          </span>
        </span>
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <div class="relative w-full space-y-6">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Editar titulo
          </AlertDialogTitle>
          <div class="mb-1">
            <div>
              <div class="sr-only">
                Titulo
              </div>
              <div>
                <Input
                  type="text"
                  v-model="expedienteTitle"
                  placeholder="..."
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <AlertDialogDescription>
            Escriba un titulo para el documento. No se olvide de guardar los cambios luego de confirmar. 
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            @click="change_title"
            variant="ghost"
          >
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </div>
    </AlertDialogContent>
  </AlertDialog>
</template>