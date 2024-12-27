<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h1 class="text-center">Generador de Perfiles</h1>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <StaticForm />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <ProfileMonroe />
      </div>
    </div>
  </div>
</template>

<script>
import StaticForm from './components/static-form.vue'
import ProfileMonroe from './components/profile-monroe.vue'

export default {
  components: {
    StaticForm,
    ProfileMonroe,
  },
}
</script>

<style></style>
