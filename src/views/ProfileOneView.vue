<template>
  <div class="container py-3">
    <!-- Formulario de Configuración -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div>
            <h2 class="h4 fw-bold mb-1">Personalizar Plantilla 1</h2>
            <p class="text-muted small mb-0">
              Modifica los enlaces, imágenes y paleta. Los cambios se reflejan inmediatamente en la vista previa.
            </p>
          </div>
        </div>
        <StaticForm />
      </div>
    </div>

    <!-- Barra de Vista Previa -->
    <div class="row mb-3 mt-4">
      <div class="col-12">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center gap-2">
            <span class="preview-badge">
              <IconEye :size="16" /> Vista Previa en Vivo
            </span>
            <span class="text-muted small">Simulación del perfil en pantalla</span>
          </div>
          <small class="text-muted d-none d-md-inline">
            Desplazamiento horizontal disponible si la resolución es menor a 1200px
          </small>
        </div>
      </div>
    </div>
  </div>

  <!-- Contenedor de la Vista Previa -->
  <div class="container-fluid px-0">
    <div class="preview-container mx-2 mb-5">
      <ProfileOne />
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { IconEye } from '@tabler/icons-vue'
import StaticForm from '../components/static-form.vue'
import ProfileOne from '../components/profile-one.vue'
import { useProfile1Store } from '@/stores/profile1'

export default {
  name: 'ProfileOneView',
  components: {
    IconEye,
    StaticForm,
    ProfileOne,
  },
  setup() {
    const store = useProfile1Store()

    onMounted(() => {
      store.preloadAllImages()
    })
  },
}
</script>
