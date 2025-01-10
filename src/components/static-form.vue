<template>
  <form @submit="handleSubmit">
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text"><IconLayersSelectedBottom /></span>
          <div class="form-floating flex-grow-1">
            <input
              type="url"
              class="form-control"
              id="img-fondo"
              aria-describedby="background-url"
              v-model="formData.imgFondo"
              placeholder="https://example.com/image.png"
            />
            <label for="img-fondo">URL imagen de fondo</label>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text"><IconLayersSelected /></span>
          <div class="form-floating flex-grow-1">
            <input
              type="url"
              class="form-control"
              id="img-superior"
              aria-describedby="front-url"
              placeholder="https://example.com/image.png"
              v-model="formData.imgFront"
            />
            <label for="img-superior">URL imagen superior</label>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text"><IconBrandX /></span>
          <div class="form-floating flex-grow-1">
            <input
              type="url"
              class="form-control"
              id="x-url"
              aria-describedby="x-url"
              placeholder="URL de X"
              v-model="formData.xURL"
            />
            <label for="x-url">URL de x.com</label>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text"><IconBrandAmazon /></span>
          <div class="form-floating flex-grow-1">
            <input
              type="url"
              class="form-control"
              id="amazon-url"
              aria-describedby="amazon-url"
              placeholder="URL de Amazon"
              v-model="formData.amazonURL"
            />
            <label for="amazon-url">URL de Amazon</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text"><IconBrandInstagram /></span>
          <div class="form-floating flex-grow-1">
            <input
              type="url"
              class="form-control"
              id="instagram-url"
              aria-describedby="instagram-url"
              placeholder="URL de Amazon"
              v-model="formData.instagramURL"
            />
            <label for="instagram-url">URL de Instagram</label>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text"><IconFlame /></span>
          <div class="form-floating">
            <input
              type="url"
              class="form-control"
              id="lovense-url"
              aria-describedby="lovense-url"
              placeholder="URL de Amazon"
              v-model="formData.lovenseURL"
            />
            <label for="lovense-url-url">URL de Lovense</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text" id="icons-color"><IconPalette /></span>
          <select
            id="icons-color"
            class="form-select"
            @onChange="updateSelectValue($event)"
            v-model="formData.iconsColor"
          >
            <option value="">-- Elija el color de los iconos --</option>
            <option value="golden">Dorado</option>
            <option value="silver">Plateado</option>
            <option value="pink">Rosado</option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-grid">
          <button class="btn btn-success" @click="handleDownloadFile" type="button">
            Exportar <IconCloudDownload />
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import {
  IconCloudDownload,
  IconLayersSelectedBottom,
  IconLayersSelected,
  IconBrandX,
  IconBrandAmazon,
  IconBrandInstagram,
  IconFlame,
  IconPalette,
} from '@tabler/icons-vue'
import { useProfile1Store } from '@/stores/profile1'

import { DownloadFile } from '../utils/downloadFile'

export default {
  setup() {
    const { formData, socialNetworksIcons, updateIconsColor } = useProfile1Store()

    return { formData, socialNetworksIcons, updateIconsColor }
  },
  components: {
    IconCloudDownload,
    IconLayersSelectedBottom,
    IconLayersSelected,
    IconBrandX,
    IconBrandAmazon,
    IconBrandInstagram,
    IconFlame,
    IconPalette,
  },
  methods: {
    updateSelectValue(event) {
      this.updateIconsColor(event.target.value)
    },
    handleDownloadFile() {
      let textResult = `<tr style="font-size:14px;font-weight:400;line-height:15px;vertical-align:top;text-align:left"><td style="font-size:14px;line-height:16px"><div><p style="display:unset"></p><ul style="background-image:url(${this.formData.imgFondo}); background-attachment:fixed; background-repeat:no-repeat; background-size:cover; margin-left:-15em; margin-right:-10em; padding-bottom:35em; padding-left:10em" ><br><img src="${this.formData.imgFront}" style="width:60%;margin-left:20%"><br><p style="text-align:left;line-height:0;width:700px;height:100px;margin:45px 0 0 41%"> <br> <br> <font style="float:left;background-color:rgba(255,255,255,0);height:100px;overflow-y:hide;overflow-x:hide;width:700px;padding:0;display:block;margin:10px 0 0 -64px"> <br> <a href="${this.formData.xURL}" rel="nofollow" target="_blank"> <img src="${this.socialNetworksIcons[this.formData.iconsColor].x}" style="margin:0 auto;float:left;width:12%"> </a> <br> <a href="${this.formData.amazonURL}" rel="nofollow" target="_blank"> <img src="${this.socialNetworksIcons[this.formData.iconsColor].amazon}" style="margin:0 0 0 60px;float:left;width:12%"> </a> <br> <a href="${this.formData.instagramURL}" rel="nofollow" target="_blank"> <img src="${this.socialNetworksIcons[this.formData.iconsColor].instagram}" style="margin:0 0 0 60px;float:left;width:12%"> </a> <br> <br> <a href="${this.formData.lovenseURL}" rel="nofollow" target="_blank"> <img src="${this.socialNetworksIcons[this.formData.iconsColor].lovense}" style="margin:0 0 0 60px;float:left;width:12%"> </a> <br> </font> <br> </p> </ul> <p></p> </div> </td> </tr>`
      DownloadFile(textResult, 'profile1-chaturbate.txt')
    },
  },
}
</script>
