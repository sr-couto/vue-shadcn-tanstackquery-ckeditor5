<script setup lang="ts">
import { Button } from '@/modules/ui/button';

</script>

<template>
  <div class="flex items-center justify-start gap-1">
    <Button
      size="sm"
      as="template"
      variant="link"
    >
      <RouterLink
        to="/editar-articulos"
        active-class="underline text-primary"
      >
        Editor de articulos
      </RouterLink>
    </Button>
    <Button
      size="sm"
      as="template"
      variant="link"
    >
      <RouterLink
        to="/articulos"
        active-class="underline text-primary"
      >
        Ver articulos
      </RouterLink>
    </Button>
  
    <Button
      size="sm"
      as="template"
      variant="link"
    >
      <RouterLink
        to="/stadistics"
        active-class="underline text-primary"
      >
        Estadisticas
      </RouterLink>
    </Button>
    <Button
      size="sm"
      as="template"
      variant="link"
    >
      <RouterLink
        to="/docs"
        active-class="underline text-primary"
      >
        Doc Ui
      </RouterLink>
    </Button>
  </div>
</template>