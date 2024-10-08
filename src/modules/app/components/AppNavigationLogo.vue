<script setup lang="ts">
import { Button } from '@/modules/ui/button';
</script>

<template>
  <Button
    as-child
    size="sm"
    variant="link"
  >
    <RouterLink
      to="/"
      active-class="underline text-primary"
    >
      Home
    </RouterLink>
  </Button>
</template>