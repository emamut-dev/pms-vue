<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h1 class="text-center">Generador de Perfiles</h1>
      </div>
    </div>
  </div>
  <RouterView />
  <MainFooter />
</template>

<script>
import MainFooter from './components/main-footer.vue'

export default {
  components: {
    MainFooter,
  },
}
</script>
