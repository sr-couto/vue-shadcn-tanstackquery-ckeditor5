<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import CardCkEditor from '@/modules/articles/components/CkEditor.vue';
import CardEditorTop from './CardEditorTop.vue';
import CardEditorBottom from './CardEditorBottom.vue';
import { useDisplayManagerStore } from '@/modules/articles/stores/useDisplayManagerStore';
import { Card, CardContent, CardFooter, CardHeader } from '@/modules/ui/card';

const display_manager = useDisplayManagerStore();

</script>

<template>
  <Card class="Card">
    <CardHeader class="CardHeader">
      <CardEditorTop />
    </CardHeader>
    <CardContent class="CardContent">
      <CardCkEditor :toolbar="display_manager.show_editor_toolbar" />
    </CardContent>
    <CardFooter class="CardFooter">
      <CardEditorBottom />
    </CardFooter>
  </Card>
</template>

<style scoped>
.Card {
  @apply relative w-full mx-auto @container overflow-hidden 
}

.CardHeader {
  @apply relative p-1
}

.CardContent {
  @apply px-0 pb-0
}

.CardFooter {
  @apply z-10 flex items-center justify-between h-12 gap-2 p-0 mx-0 bg-background/20
}


</style>