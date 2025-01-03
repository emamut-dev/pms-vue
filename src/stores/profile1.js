import { defineStore } from 'pinia'

export const useProfile1Store = defineStore('profile1', {
  state: () => ({
    imgFondo: 'https://i.ibb.co/6mwYwXS/fondo-perfil-1.png',
    imgFront: 'https://i.ibb.co/y836YK2/Contenido-perfil-2.png',
    xURL: 'https://x.com/emamutDev',
    amazonURL: 'https://www.amazon.com/hz/wishlist/ls/1HEC3UPGS8A7Q',
    instagramURL: 'https://www.instagram.com/emamutdev/',
    lovenseURL: 'https://www.lovense.com/',
  }),
  actions: {
    setImgFondo(value) {
      this.imgFondo = value
    },
    setImgFront(value) {
      this.imgFront = value
    },
    setXURL(value) {
      this.xURL = value
    },
    setAmazonURL(value) {
      this.amazonURL = value
    },
    setInstagramURL(value) {
      this.instagramURL = value
    },
    setLovenseURL(value) {
      this.lovenseURL = value
    },
  },
})
