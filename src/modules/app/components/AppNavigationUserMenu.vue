<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
} from '@/modules/ui/avatar'
import { Button } from '@/modules/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/modules/ui/dropdown-menu'
import { useAccountStore } from "@/modules/app/stores/useAccountStore";
import { RouterLink } from 'vue-router';
import LucideUserRoundPlus from '~icons/lucide/user-round-plus'
import { vAutoAnimate } from '@formkit/auto-animate/vue'
const account = useAccountStore();
</script>

<template>
  <div
    v-auto-animate="{ duration: 500 }"
    class="relative flex items-center justify-end w-10 h-8"
    v-if="account.user !== null"
  >
    <DropdownMenu v-if="account.user.length !== 0">
      <DropdownMenuTrigger as-child>
        <Button
          variant="secondary"
          class="relative"
          size="icon"
        >
          <Avatar class="flex items-center justify-center bg-transparent rounded-none size-6">
            <AvatarFallback class="uppercase">
              {{ account.user.slice(0, 2) }}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        class="w-56"
        align="end"
      >
        <DropdownMenuLabel class="flex font-normal">
          <p class="text-sm font-medium leading-none">
            {{ account.user }}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem as-child>
            <RouterLink to="/change-user">
              Cambiar nombre
            </RouterLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    <Button
      v-else
      as-child
      variant="secondary"
      size="icon"
    >
      <RouterLink to="/change-user">
        <LucideUserRoundPlus class="size-4" />
      </RouterLink>
    </Button>
  </div>
</template>