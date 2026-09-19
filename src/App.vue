<template>
  <header class="border-bottom bg-white py-3 mb-4 shadow-sm">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center gap-2">
        <RouterLink to="/" class="text-decoration-none text-dark d-flex align-items-center gap-2">
          <h1 class="font-merryweather h4 mb-0 fw-bold">Generador de Perfiles</h1>
          <span class="badge bg-warning text-dark">Beta</span>
        </RouterLink>
      </div>
      <div>
        <RouterLink
          v-if="currentPath !== '/'"
          to="/"
          class="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-1"
        >
          <IconChevronLeft :size="18" /> Volver
        </RouterLink>
      </div>
    </div>
  </header>

  <main style="min-height: 70vh">
    <RouterView />
  </main>

  <MainFooter />
</template>

<script>
import { IconChevronLeft } from '@tabler/icons-vue'
import MainFooter from '@/components/main-footer.vue'

export default {
  computed: {
    currentPath() {
      return this.$route.path
    },
  },
  components: {
    IconChevronLeft,
    MainFooter,
  },
}
</script>
