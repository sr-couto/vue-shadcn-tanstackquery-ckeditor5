<script setup lang="ts">
import { ref } from 'vue'
import { useDropZone, useEventListener } from '@vueuse/core'

const filesData = ref<{ name: string, size: number, type: string, lastModified: number }[]>([])

function onDrop(files: File[] | null) {
  filesData.value = []
  if (files) {
    filesData.value = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }))
  }
}


const dropZoneRef = ref<HTMLElement>()
const pngRef = ref()

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

useEventListener(pngRef, 'dragstart', (event) => {
  event.dataTransfer?.setData('image/png', '/vue.png')
})

</script>

<template>
  <div
    ref="dropZoneRef"
    class="flex flex-col gap-3 w-full min-h-[500px] h-auto justify-center border-2 border-dotted duration-300 items-center rounded"
    :class="isOverDropZone ? 'bg-primary/10 border-primary' : ''"
  >
    <div class="font-bold mb-2">
      Suelta archivos sobre la zona de soltar
    </div>
    <div>
      isOverDropZone:
      {{ isOverDropZone }}
    </div>
    <div
      v-if="filesData.length !== 0"
      class="flex flex-col divide-y w-full border border-border flex-wrap justify-center items-center"
    >
      <div
        v-for="(file, index) in filesData"
        :key="index"
        class="w-full bg-black-200/10 p-3"
      >
        <p>{{ file.name }}</p>
        <p>{{ file.size }}</p>
        <p>{{ file.type }}</p>
      </div>
    </div>
  </div>
</template>