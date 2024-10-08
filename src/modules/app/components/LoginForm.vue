<script setup lang="ts">
import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import { Button } from '@/modules/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'
import { toast } from '@/modules/ui/toast'
import { useAccountStore } from "@/modules/app/stores/useAccountStore";

const account = useAccountStore();

const formSchema = toTypedSchema(z.object({
  username: z
      .string({ required_error: 'Usuario es requerido' })
      .min(4, { message: 'Minimo 4 caracteres' })
      .max(18, { message: 'Máximo 18 caracteres.' }),
}))

const { handleSubmit, setValues } = useForm({
  initialValues: {
    username: account.user,
  },
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  account.setUser(values.username)
  toast({
    title: 'Creaste en localStorage el siguiente objeto en la clave account:',
    duration: 2000,
    description: h('pre', { class: 'mt-2 md:w-[340px] rounded-md bg-secondary p-4' }, h('code', { class: 'text-secondary-foreground' }, JSON.stringify(values, null, 2))),
  })
})

function clearUser() {
  account.clearUser()
  toast({
    title: 'Eliminaste el valor username ',
    duration: 2000,
    description: 'El objeto User sigue creado en localstorage pero se encuentra vacío.'
  })
  setValues({
    username: '',
  });
}

</script>

<template>
  <form
    class="relative w-full space-y-6"
    @submit="onSubmit"
  >
    <FormField
      v-slot="{ componentField }"
      name="username"
    >
      <FormItem v-auto-animate="{ duration: 300 }">
        <div
          class="flex items-center justify-between h-7"
        >
          <FormLabel>Usuario</FormLabel>
          <FormMessage />
        </div>
        <FormControl>
          <Input
            type="text"
            placeholder="..."
            autocomplete="off"
            :key="account.user"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription>
          Nombre que se usará en la aplicación
        </FormDescription>
      </FormItem>
    </FormField>
    <div class="flex items-center justify-between w-full gap-3">
      <Button
        variant="outline"
        @click.prevent="clearUser()"
      >
        Limpiar campo
      </Button>
      <Button
        type="submit"
      >
        Guardar
      </Button>
    </div>
  </form>
</template>