import { defineStore } from 'pinia'

export const useProfile1Store = defineStore('profile1', {
  state: () => ({
    formData: {
      imgFondo: 'https://i.ibb.co/6mwYwXS/fondo-perfil-1.png',
      imgFront: 'https://i.ibb.co/y836YK2/Contenido-perfil-2.png',
      xURL: 'https://x.com/emamutDev',
      amazonURL: 'https://www.amazon.com/hz/wishlist/ls/1HEC3UPGS8A7Q',
      instagramURL: 'https://www.instagram.com/emamutdev/',
      lovenseURL: 'https://www.lovense.com/',
    },
    disabledButtons: {
      saveButton: true,
      exportButton: true,
    },
  }),
  actions: {
    setFormData(key, value) {
      if (this.formData[key]) {
        this.formData[key] = value
      }
    },
    setDisabledButtons(key, value) {
      if (this.disabledButtons[key]) {
        this.disabledButtons[key] = value
      }
    },
  },
})
