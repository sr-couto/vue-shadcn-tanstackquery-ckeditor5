<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/modules/ui/card'
import { Button } from '@/modules/ui/button';
import SvgSpinnersEclipseHalf from '~icons/svg-spinners/eclipse-half'
import LineMdAlertCircleTwotone from '~icons/line-md/alert-circle-twotone'

import { useQuery } from '@tanstack/vue-query'
import type { Article } from '../types';

const { isError, data, isLoading } = useQuery<Article[], Error>({
  queryKey: ['allArticles'],
  queryFn: async () => {
    const response = await fetch('/api/articulos')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  },
})
</script>

<template>
  <div class="w-full">
    <div
      v-if="isLoading || isError"
      class="flex flex-col items-center justify-center gap-2"
      :class="isError ? '!ring-primary' : ''"
    >
      <div
        v-if="isLoading"
        class="flex flex-col items-center justify-center w-full h-96"
      >
        <SvgSpinnersEclipseHalf class="w-12 h-12" />
        <span>Loading</span>
      </div>
      <div
        v-if="isError"
        class="flex items-center justify-center w-full gap-2 py-3 bg-primary/10"
      >
        <LineMdAlertCircleTwotone class="w-5 h-5 text-primary" />
        Está viendo una versión sin actualizar
      </div>
    </div>
    <div class="grid w-full max-w-lg gap-4 px-3 mx-auto mt-6">
      <Card
        v-for="posts in data"
        :key="posts.id"
        class="flex items-center justify-between min-h-12"
      >
        <CardHeader class="flex flex-row items-center justify-start gap-2">
          <CardDescription class="font-bold">
            {{ posts.id }}
          </CardDescription>
          <CardTitle class="!flex items-center justify-center line-clamp-1 min-h-8 max-w-64 ms:max-w-80">
            <span>{{ posts.title }}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter class="justify-end p-0 mr-1">
          <Button
            variant="ghost"
            as-child
          >
            <RouterLink
              :to="'/articulos/' + posts.id"
              class="btn"
            >
              Ver
            </RouterLink>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>