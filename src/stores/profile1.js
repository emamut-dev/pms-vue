import { defineStore } from 'pinia'

export const useProfile1Store = defineStore('profile1', {
  state: () => ({
    formData: {
      imgFondo: 'https://i.ibb.co/6mwYwXS/fondo-perfil-1.png',
      imgFront: 'https://i.ibb.co/6txfbjs/Contenido-perfil-2.png',
      xURL: 'https://x.com/emamutDev',
      amazonURL: 'https://www.amazon.com/hz/wishlist/ls/1HEC3UPGS8A7Q',
      instagramURL: 'https://www.instagram.com/emamutdev/',
      lovenseURL: 'https://www.lovense.com/',
      iconsColor: 'golden',
    },
    socialNetworksIcons: {
      golden: {
        x: 'https://i.ibb.co/MGtSPH6/x-1.png',
        instagram: 'https://i.ibb.co/vY56ptb/instagram-1.png',
        amazon: 'https://i.ibb.co/9ch3CCD/amazon-1.png',
        lovense: 'https://i.ibb.co/PGX6FS0/4.png',
      },
      pink: {
        x: 'https://i.ibb.co/23Z8Ddn/x.png',
        instagram: 'https://i.ibb.co/gJxVHYw/instagram.png',
        amazon: 'https://i.ibb.co/TbCGYC2/amazon.png',
        lovense: 'https://i.ibb.co/M1zQkdX/lovense-1.png',
      },
      silver: {
        x: 'https://i.ibb.co/X8GWx1v/1.png',
        instagram: 'https://i.ibb.co/v4v8RcN/3.png',
        amazon: 'https://i.ibb.co/Lrbz8JW/2.png',
        lovense: 'https://i.ibb.co/cXr4PRc/lovense.png',
      },
    },
  }),
  actions: {
    updateIconsColor(value) {
      this.formData.iconsColor = value
    },
  },
})
