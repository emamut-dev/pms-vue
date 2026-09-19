<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-lg-7 col-md-9 text-center mb-4">
        <img
          :src="LogoChaturbate"
          style="width: 13rem; height: auto"
          width="208"
          height="38"
          loading="eager"
          decoding="async"
          alt="Chaturbate"
          class="mb-3"
        />
        <p class="text-muted lead">
          Crea y personaliza plantillas de biografía optimizadas para transmisiones en vivo.
        </p>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-7 col-md-9">
        <div class="card card-custom overflow-hidden">
          <div class="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
            <span class="fw-semibold text-dark">Catálogo de Plantillas</span>
            <span class="badge bg-primary-subtle text-primary border border-primary-subtle">1 Disponible</span>
          </div>
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
              <h2 class="h5 mb-0 fw-bold">Plantilla 1 — Fondo Fijo & Enlaces</h2>
              <span class="badge bg-success-subtle text-success border border-success-subtle">Recomendada</span>
            </div>
            <p class="text-secondary small mb-3">
              Estructura con imagen de fondo fijo, imagen frontal destacada y barra flotante de redes sociales
              (X, Amazon Wishlist, Instagram y Lovense) con paletas en dorado, plateado o rosado.
            </p>
            <div class="d-flex align-items-center justify-content-between pt-2 border-top">
              <small class="text-muted">Exporta código HTML listo para pegar</small>
              <RouterLink to="/profile-one" class="btn btn-primary d-inline-flex align-items-center gap-2">
                Personalizar Perfil <IconArrowRight :size="18" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { IconArrowRight } from '@tabler/icons-vue'
import LogoChaturbate from '../assets/logo-chaturbate.svg'
import { useProfile1Store } from '@/stores/profile1'

export default {
  name: 'HomePage',
  components: {
    IconArrowRight,
  },
  setup() {
    const store = useProfile1Store()

    onMounted(() => {
      // Precarga proactiva de imágenes e iconos en segundo plano
      store.preloadAllImages()
    })

    return { LogoChaturbate }
  },
}
</script>
