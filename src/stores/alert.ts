import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  const alertText = ref('')
  function setAlert(text: string) {
    alertText.value = text

    setTimeout(() => {
      alertText.value = ''
    }, 4000)
  }
  return { alertText, setAlert }
})
