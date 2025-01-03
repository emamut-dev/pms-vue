<template>
  <form>
    <div class="row mt-4">
      <div class="col">
        <div class="input-group">
          <span class="input-group-text" id="background-url"><IconLayersSelectedBottom /></span>
          <input
            type="url"
            class="form-control"
            id="img-fondo"
            aria-describedby="background-url"
            placeholder="URL imagen de fondo"
          />
        </div>
        <div class="form-text">Ejemplo: https://www.example.com/image.png</div>
      </div>
      <div class="col">
        <div class="input-group">
          <span class="input-group-text" id="front-url"><IconLayersSelected /></span>
          <input
            type="url"
            class="form-control"
            id="img-superior"
            aria-describedby="front-url"
            placeholder="URL imagen superior"
          />
          <div class="form-text">Ejemplo: https://www.example.com/image.png</div>
        </div>
      </div>
      <div class="col-md-2 text-center">
        <button class="btn btn-success">Exportar <IconCloudDownload /></button>
      </div>
    </div>
  </form>
</template>

<script>
import { IconCloudDownload, IconLayersSelectedBottom, IconLayersSelected } from '@tabler/icons-vue'

export default {
  components: {
    IconCloudDownload,
    IconLayersSelectedBottom,
    IconLayersSelected,
  },
}
</script>
