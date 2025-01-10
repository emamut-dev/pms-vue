<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <div class="text-center"><img :src="LogoChaturbate" style="width: 12rem" alt="" /></div>
        <div class="list-group mt-4">
          <RouterLink to="/profile-one" class="list-group-item list-group-item-action"
            >Perfil 1</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoChaturbate from '../assets/logo-chaturbate.svg'

export default {
  name: 'HomePage',
  setup() {
    return { LogoChaturbate }
  },
}
</script>
