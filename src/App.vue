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
  </div>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col">
        <ProfileOne />
      </div>
    </div>
  </div>
</template>

<script>
import StaticForm from './components/static-form.vue'
import ProfileOne from './components/profile-one.vue'

export default {
  components: {
    StaticForm,
    ProfileOne,
  },
}
</script>

<style></style>
