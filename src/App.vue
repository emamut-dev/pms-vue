<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h1 class="font-merryweather text-center">Generador de Perfiles</h1>
        <small v-if="currentPath !== '/'"
          ><RouterLink to="/" class="text-dark"> <IconChevronLeft /> Volver </RouterLink></small
        >
      </div>
    </div>
  </div>

  <section style="min-height: 70vh">
    <RouterView />
  </section>

  <div class="container my-5">
    <hr />
    <div class="row justify-content-center">
      <div class="col">
        <p class="text-center font-merryweather">
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
import { IconHeartFilled, IconChevronLeft } from '@tabler/icons-vue'

export default {
  computed: {
    currentPath() {
      return this.$route.path
    },
  },
  components: {
    IconHeartFilled,
    IconChevronLeft,
  },
}
</script>
