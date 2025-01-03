<template>
  <form>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text" id="background-url"><IconLayersSelectedBottom /></span>
          <input
            type="url"
            class="form-control"
            id="img-fondo"
            aria-describedby="background-url"
            placeholder="URL imagen de fondo"
            v-model="formData.imgFondo"
          />
        </div>
        <div class="form-text">Ejemplo: https://example.com/image.png</div>
      </div>
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text" id="front-url"><IconLayersSelected /></span>
          <input
            type="url"
            class="form-control"
            id="img-superior"
            aria-describedby="front-url"
            placeholder="URL imagen superior"
            v-model="formData.imgFront"
          />
        </div>
        <div class="form-text">Ejemplo: https://example.com/image.png</div>
      </div>
    </div>
    <hr />
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text" id="x-url"><IconBrandX /></span>
          <input
            type="url"
            class="form-control"
            id="img-superior"
            aria-describedby="x-url"
            placeholder="URL de X"
            v-model="formData.xURL"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text" id="amazon-url"><IconBrandAmazon /></span>
          <input
            type="url"
            class="form-control"
            id="img-superior"
            aria-describedby="amazon-url"
            placeholder="URL de Amazon"
            v-model="formData.amazonURL"
          />
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text" id="instagram-url"><IconBrandInstagram /></span>
          <input
            type="url"
            class="form-control"
            id="img-superior"
            aria-describedby="instagram-url"
            placeholder="URL de Amazon"
            v-model="formData.instagramURL"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text" id="lovense-url"><IconFlame /></span>
          <input
            type="url"
            class="form-control"
            id="img-superior"
            aria-describedby="lovense-url"
            placeholder="URL de Amazon"
            v-model="formData.lovenseURL"
          />
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="d-grid">
          <button class="btn btn-warning" type="submit">Guardar <IconDeviceFloppy /></button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-grid">
          <button class="btn btn-success">Exportar <IconCloudDownload /></button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import {
  IconDeviceFloppy,
  IconCloudDownload,
  IconLayersSelectedBottom,
  IconLayersSelected,
  IconBrandX,
  IconBrandAmazon,
  IconBrandInstagram,
  IconFlame,
} from '@tabler/icons-vue'
import { useProfile1Store } from '@/stores/profile1'

export default {
  setup() {
    const { formData } = useProfile1Store()
    return { formData }
  },
  components: {
    IconDeviceFloppy,
    IconCloudDownload,
    IconLayersSelectedBottom,
    IconLayersSelected,
    IconBrandX,
    IconBrandAmazon,
    IconBrandInstagram,
    IconFlame,
  },
}
</script>
