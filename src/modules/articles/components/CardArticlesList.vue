<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
} from '@/modules/ui/card';
import Button from '@/modules/ui/button/Button.vue';
import { Pin, PinOff, X } from 'lucide-vue-next';
import Input from '@/modules/ui/input/Input.vue';
import LucideListFilter from '~icons/lucide/list-filter'
import LucideSearchLarge from '~icons/lucide/search-large'
import Separator from '@/modules/ui/separator/Separator.vue';
import ArticlesCommandSearch from './CommandArticlesSearch.vue';

import { useDisplayManagerStore } from '@/modules/articles/stores/useDisplayManagerStore';
import { storeToRefs } from 'pinia';

const display_manager = useDisplayManagerStore();
const { fixed_documentacion_en_curso } = storeToRefs(display_manager)

</script>

<template>
  <Card class="flex flex-col h-[calc(100vh-6.25rem)]">
    <CardHeader class="bg-secondary/10">
      <div class="flex items-center justify-between">
        <CardTitle>
          Articulos
        </CardTitle>
        <div class="flex items-center justify-center gap-2">
          <Button
            size="xs"
            :variant="fixed_documentacion_en_curso ? 'default' : 'secondary'"
            @click="fixed_documentacion_en_curso = !fixed_documentacion_en_curso"
          >
            <Pin
              v-if="fixed_documentacion_en_curso"
              class="size-4"
            />
            <PinOff
              v-else
              class="size-4"
            />
          </Button>
          <Button
            size="xs"
            variant="secondary"
            @click="display_manager.show_documentacion_en_curso = false"
          >
            <X class="size-4" />
          </Button>
        </div>
      </div>
    </CardHeader>
    <Separator />
    <div class="items-center justify-between hidden gap-1 px-3 py-2">
      <div class="relative items-center w-full max-w-sm">
        <Input
          id="search"
          type="text"
          placeholder="Search..."
          class="pl-10 h-7"
        />
        <span class="absolute inset-y-0 flex items-center justify-center px-2 start-0">
          <LucideSearchLarge class="size-6 text-muted-foreground" />
        </span>
      </div>
      <div class="flex gap-2">
        <Button
          size="xs"
          variant="outline"
        >
          <LucideListFilter />
        </Button>
      </div>
    </div>
    <Separator />
    <ArticlesCommandSearch />
  </Card>
</template>
