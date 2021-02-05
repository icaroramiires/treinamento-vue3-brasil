<template>
<div class="flex justify-between">
  <h1 class="text-2xl font-black text-gray-800">Entre na sua conta</h1>
  <button @click="close" class="text-2xl text-gray-600 focus:outline-none">&times;</button>
</div>

<div class="mt-16">
  <form @submit.prevent="handleSubmit">
    <label for="" class="block">
      <span class="text-lg font-medium text-gray-800">E-mail:</span>
      <input :class="{'border-brand-danger': !!state.email.errorMessage}" v-model="state.email.value" type="email" placeholder="email@email.com" class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded focus:outline-none">
      <span v-if="!!state.email.errorMessage" class="block font-medium text-brand-danger"> {{ state.email.errorMessage }} </span>
    </label>
    <label for="" class="block mt-9">
      <span class="text-lg font-medium text-gray-800">Senha:</span>
      <input :class="{'border-brand-danger': !!state.password.errorMessage}" v-model="state.password.value" type="email" placeholder="email@email.com" class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded focus:outline-none">
      <span v-if="!!state.password.errorMessage" class="block font-medium text-brand-danger"> {{ state.password.errorMessage }} </span>
      <button :disabled="state.isLoading" type="submit" :class="{'opacity-50': state.isLoading}" class="px-8 py-3 mt-10 text-2x1 font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all durantion-150">Entrar</button>
    </label>
  </form>
</div>
</template>

<script>
import { reactive } from 'vue'
import { useField } from 'vee-validate'
import useModal from '../../hooks/useModal'
import { validateEmptyAndLength, validateEmptyEmail } from '../../utils/validators'
export default {
  setup () {
    const modal = useModal()

    const {
      value: emailValue,
      errorMessage: emailErrorMessage
    } = useField('email', validateEmptyEmail)

    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', validateEmptyAndLength)

    const state = reactive({
      hasError: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      }
    })
    function handleSubmit () {

    }
    return {
      state,
      close: modal.close,
      handleSubmit
    }
  }
}
</script>
