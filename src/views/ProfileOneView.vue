<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <StaticForm />
      </div>
    </div>
  </div>
  <div class="container-fluid px-0">
    <div class="row mt-5">
      <div class="col">
        <ProfileOne />
      </div>
    </div>
  </div>
</template>

<script>
import StaticForm from '../components/static-form.vue'
import ProfileOne from '../components/profile-one.vue'

export default {
  name: 'ProfileOneView',
  components: {
    StaticForm,
    ProfileOne,
  },
}
</script>
