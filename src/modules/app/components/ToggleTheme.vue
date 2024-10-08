<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import LucideSunMedium from '~icons/lucide/sun-medium'
import LucideMoon from '~icons/lucide/moon'
import { Button } from '@/modules/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/modules/ui/dropdown-menu'

const mode = useColorMode()
</script> 

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="secondary"
        size="icon"
      >
        <LucideMoon
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 duration-300 dark:scale-0"
        />
        <LucideSunMedium
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:text-white transition-all dark:rotate-0 duration-300 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="mode = 'light'">
        Claro
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'dark'">
        Oscuro
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'auto'">
        Sistema
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>