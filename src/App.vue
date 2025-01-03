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
  <MainFooter />
</template>

<script>
import StaticForm from './components/static-form.vue'
import ProfileOne from './components/profile-one.vue'
import MainFooter from './components/main-footer.vue'

export default {
  components: {
    MainFooter,
    StaticForm,
    ProfileOne,
  },
}
</script>
