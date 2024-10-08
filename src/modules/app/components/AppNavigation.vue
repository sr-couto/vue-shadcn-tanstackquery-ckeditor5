<script setup lang="ts">
// import AppNavigationLogo from '@/modules/app/components/AppNavigationLogo.vue';
import AppNavigationUserMenu from '@/modules/app/components/AppNavigationUserMenu.vue';
import AppNavigationCommandBar from '@/modules/app/components/AppNavigationCommandBar.vue';
import AppNavigationMenuBar from '@/modules/app/components/AppNavigationMenuBar.vue';
import ToggleTheme from '@/modules/app/components/ToggleTheme.vue';
import AppNavigationLogo from './AppNavigationLogo.vue';
</script>

<template>
  <div class="flex items-center justify-between h-12 px-1 border-b md:px-2 bg-background border-foreground/20">
    <div class="flex items-center justify-start gap-3 md:w-full">
      <AppNavigationLogo />
      <AppNavigationMenuBar class="!hidden md:!flex" />
    </div>
    <div class="flex items-center justify-end w-full gap-3">
      <AppNavigationCommandBar />
      <AppNavigationUserMenu />
      <ToggleTheme />
    </div>
  </div>
</template>