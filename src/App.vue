<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h1 class="text-center">Generador de Perfiles</h1>
      </div>
    </div>
  </div>

  <RouterView />

  <div class="container my-5">
    <hr />
    <div class="row justify-content-center">
      <div class="col">
        <p class="text-center">
          <small>
            Powered with <IconHeartFilled color="red" /> by
            <a href="https://emamut.netlify.app/" target="_blank">emamut</a>
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { IconHeartFilled } from '@tabler/icons-vue'

export default {
  components: {
    IconHeartFilled,
  },
}
</script>
