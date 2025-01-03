<template>
  <form>
    <div class="row mt-4">
      <div class="col">
        <div class="form-floating">
          <input
            type="url"
            class="form-control"
            id="img-fondo"
            aria-describedby="nameHelp"
            placeholder="https://example.com/image.jpg"
          />
          <label for="img-fondo">URL imagen de fondo</label>
          <div class="form-text">Ejemplo: https://www.example.com/image.png</div>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input
            type="url"
            class="form-control"
            id="img-superior"
            aria-describedby="nameHelp"
            placeholder="https://example.com/image.jpg"
          />
          <label for="img-fondo">URL imagen superior</label>
          <div class="form-text">Ejemplo: https://www.example.com/image.png</div>
        </div>
      </div>
      <div class="col-md-2 text-center">
        <button class="btn btn-success btn-lg mt-1">Exportar <IconCloudDownload /></button>
      </div>
    </div>
  </form>
</template>

<script>
import { IconCloudDownload } from '@tabler/icons-vue'

export default {
  components: {
    IconCloudDownload,
  },
}
</script>
