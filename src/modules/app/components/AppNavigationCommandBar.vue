<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'
import {
  CommandDialog,
  CommandGroup,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/modules/ui/command'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';
import { useColorMode } from '@vueuse/core'

const open = ref(false)
const router = useRouter();
const keys = useMagicKeys()
const CtrlM = keys['Ctrl+M']

function handleOpenChange() {
  open.value = !open.value
}

function selectRoute(i: string) {
  router.push(i);
  open.value = false
}

const mode = useColorMode()

watch(CtrlM, (v) => {
  if (v)
    handleOpenChange()
})
</script>

<template>
  <button
    @click="handleOpenChange"
    class="text-xs text-muted-foreground"
  >
    Menú
    <kbd
      class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
    >
      <span class="">Ctrl</span>M
    </kbd>
  </button>
  <CommandDialog
    :open="open"
    @update:open="handleOpenChange"
  >
    <CommandInput
      placeholder="Buscar páginas..."
      class="h-12"
    />
    <CommandList heading="Suggestions">
      <CommandEmpty>Sin resultados.</CommandEmpty>
      <CommandGroup heading="Páginas">
        <CommandItem
          value="inicio"
          @select="selectRoute('/')"
        >
          Inicio
        </CommandItem>
        <CommandItem
          value="editor de articulos"
          @select="selectRoute('/editar-articulos')"
        >
          Editor de articulos
        </CommandItem>
        <CommandItem
          value="todos los articulos"
          @select="selectRoute('/articulos')"
        >
          Todos los articulos
        </CommandItem>
        <CommandItem
          value="estadisticas"
          @select="selectRoute('/stadistics')"
        >
          Estadisticas
        </CommandItem>
      </CommandGroup>
      <CommandGroup heading="Configuración">
        <CommandItem
          value="Documentación componentes"
          @select="selectRoute('/docs')"
        >
          Documentación componentes
        </CommandItem>
        <CommandItem
          value="cambiar nombre"
          @select="selectRoute('/change-user')"
        >
          Cambiar nombre
        </CommandItem>
        
        <CommandItem
          value="Modo de color: claro"
          @click="mode = 'light'"
        >
          Modo de color: Claro
        </CommandItem>
        <CommandItem
          value="Modo de color: oscuro"
          @click="mode = 'dark'"
        >
          Modo de color: Oscuro
        </CommandItem>
        <CommandItem
          value="Modo de color: sistema"
          @click="mode = 'auto'"
        >
          Modo de color: Sistema
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</template>