<template>
  <footer class="site-footer bg-dark text-light pt-5 pb-4 mt-auto">
    <div class="container">
      <!-- Main Footer Columns -->
      <div class="row g-4 pb-4 border-bottom border-secondary border-opacity-25">
        <!-- Col 1: Brand & About -->
        <div class="col-lg-4 col-md-6">
          <div class="d-flex align-items-center gap-2 mb-3">
            <span class="brand-icon-box d-inline-flex align-items-center justify-content-center shadow-sm">
              <IconSparkles :size="20" class="text-warning" />
            </span>
            <div>
              <span class="h5 mb-0 fw-bold text-white d-block font-merryweather">
                Generador de Perfiles
              </span>
              <small class="text-muted text-uppercase fw-semibold letter-spacing-1">Pimp My Stream</small>
            </div>
          </div>
          <p class="text-secondary small pe-lg-3 mb-3">
            Herramienta web gratuita creada para streamers y creadores de contenido. Diseña, personaliza y
            obtiene código HTML limpio y responsivo para tu biografía en segundos.
          </p>
          <div class="d-flex flex-wrap gap-2 align-items-center">
            <span class="badge badge-subtle-dark border border-secondary border-opacity-25 text-white-50">
              <span class="status-indicator"></span> v1.0 Beta
            </span>
            <span class="badge badge-subtle-dark border border-secondary border-opacity-25 text-white-50">
              Código Abierto
            </span>
            <span class="badge badge-subtle-dark border border-secondary border-opacity-25 text-white-50 d-inline-flex align-items-center gap-1">
              <IconShieldCheck :size="13" class="text-success" />
              100% en Navegador
            </span>
          </div>
        </div>

        <!-- Col 2: Plantillas y Herramientas -->
        <div class="col-lg-3 col-md-6">
          <h6 class="text-white text-uppercase fw-semibold mb-3 small letter-spacing-1">
            Plantillas & Recursos
          </h6>
          <ul class="list-unstyled footer-nav-list mb-0 small">
            <li class="mb-2">
              <RouterLink to="/" class="footer-link d-inline-flex align-items-center gap-2 text-decoration-none">
                <IconChevronRight :size="15" class="text-secondary" />
                <span>Catálogo de Plantillas</span>
              </RouterLink>
            </li>
            <li class="mb-2">
              <RouterLink to="/profile-one" class="footer-link d-inline-flex align-items-center gap-2 text-decoration-none">
                <IconChevronRight :size="15" class="text-secondary" />
                <span>Plantilla 1: Fondo Fijo & Enlaces</span>
              </RouterLink>
            </li>
            <li class="mb-2">
              <button
                type="button"
                class="btn btn-link p-0 footer-link d-inline-flex align-items-center gap-2 text-decoration-none text-start"
                @click="openGuideModal"
              >
                <IconChevronRight :size="15" class="text-secondary" />
                <span>¿Cómo usar en Chaturbate?</span>
                <span class="badge bg-warning text-dark ms-1 font-monospace" style="font-size: 0.65rem">Guía</span>
              </button>
            </li>
          </ul>
        </div>

        <!-- Col 3: Comunidad y Código -->
        <div class="col-lg-2 col-md-6">
          <h6 class="text-white text-uppercase fw-semibold mb-3 small letter-spacing-1">
            Proyecto
          </h6>
          <ul class="list-unstyled footer-nav-list mb-0 small">
            <li class="mb-2">
              <a
                href="https://github.com/emamut-dev/pms-vue"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link d-inline-flex align-items-center gap-2 text-decoration-none"
              >
                <IconBrandGithub :size="16" />
                <span>GitHub Repo</span>
                <IconExternalLink :size="12" class="opacity-50" />
              </a>
            </li>
            <li class="mb-2">
              <a
                href="https://github.com/emamut-dev/pms-vue/issues"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link d-inline-flex align-items-center gap-2 text-decoration-none"
              >
                <IconCode :size="16" />
                <span>Reportar Bug</span>
                <IconExternalLink :size="12" class="opacity-50" />
              </a>
            </li>
            <li class="mb-2">
              <span class="text-white-50 d-inline-flex align-items-center gap-2">
                <IconWorld :size="16" />
                <span>Licencia MIT</span>
              </span>
            </li>
          </ul>
        </div>

        <!-- Col 4: Autor & Volver arriba -->
        <div class="col-lg-3 col-md-6">
          <h6 class="text-white text-uppercase fw-semibold mb-3 small letter-spacing-1">
            Desarrollador
          </h6>
          <div class="d-flex align-items-center gap-2 mb-2">
            <img
              src="/logo-emamut.png"
              alt="emamut logo"
              width="26"
              height="26"
              class="rounded bg-white p-1 object-fit-contain flex-shrink-0"
              onerror="this.style.display='none'"
            />
            <span class="text-white fw-bold">Faber Vergara (emamut)</span>
          </div>
          <p class="text-secondary small mb-3">
            Enfocado en herramientas web intuitivas y de alto impacto visual para creadores digitales.
          </p>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <a
              href="https://emamut.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-1 developer-badge"
            >
              <IconWorld :size="14" />
              <span>Sitio Web</span>
            </a>
            <a
              href="https://github.com/emamut"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-1 developer-badge"
            >
              <IconBrandGithub :size="14" />
              <span>GitHub</span>
            </a>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-sm btn-dark border border-secondary border-opacity-50 text-white-50 d-inline-flex align-items-center gap-1 scroll-top-btn"
              @click="scrollToTop"
              title="Volver al inicio de la página"
            >
              <IconArrowUp :size="14" />
              <span>Volver arriba</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Disclaimer & Subfooter -->
      <div class="row pt-4 align-items-center gy-3">
        <div class="col-md-7">
          <p class="text-secondary mb-1 small">
            © {{ currentYear }} <strong class="text-white">emamut</strong> (Faber Vergara). Código abierto bajo licencia MIT.
          </p>
          <p class="text-muted small mb-0 disclaimer-text">
            Aviso de exención de responsabilidad: Este generador es un proyecto independiente de código abierto y no está afiliado,
            asociado, respaldado ni aprobado oficialmente por Chaturbate ni por sus entidades matrices. Todas las marcas registradas pertenecen a sus respectivos propietarios.
          </p>
        </div>
        <div class="col-md-5 text-md-end">
          <span class="text-secondary small d-inline-flex align-items-center gap-1">
            Hecho con <IconHeartFilled :size="15" class="text-danger heart-pulse" /> por
            <a
              href="https://emamut.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white text-decoration-none fw-semibold link-emamut"
            >
              emamut
            </a>
          </span>
        </div>
      </div>
    </div>

    <!-- Modal: Guía de uso en Chaturbate -->
    <div
      v-if="showGuideModal"
      class="modal-backdrop-custom d-flex align-items-center justify-content-center p-3"
      @click.self="closeGuideModal"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
    >
      <div class="modal-dialog-custom bg-white text-dark rounded-3 shadow-lg p-4 position-relative">
        <div class="d-flex justify-content-between align-items-start border-bottom pb-3 mb-3">
          <div class="d-flex align-items-center gap-2">
            <span class="badge bg-primary p-2 rounded-2">
              <IconHelpCircle :size="20" class="text-white" />
            </span>
            <div>
              <h5 class="mb-0 fw-bold">¿Cómo usar el perfil generado?</h5>
              <small class="text-muted">Instrucciones rápidas para tu sala de Chaturbate</small>
            </div>
          </div>
          <button
            type="button"
            class="btn-close"
            aria-label="Cerrar"
            @click="closeGuideModal"
          ></button>
        </div>

        <div class="guide-steps mb-4">
          <div class="d-flex gap-3 mb-3">
            <div class="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
              1
            </div>
            <div>
              <h6 class="fw-bold mb-1">Personaliza tu plantilla</h6>
              <p class="text-muted small mb-0">
                Ve a la plantilla elegida, introduce las URLs de tus imágenes (fondo y frontal) y los enlaces a tus redes sociales.
              </p>
            </div>
          </div>

          <div class="d-flex gap-3 mb-3">
            <div class="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
              2
            </div>
            <div>
              <h6 class="fw-bold mb-1">Copia o descarga el código</h6>
              <p class="text-muted small mb-0">
                Haz clic en <strong>"Copiar Código HTML"</strong> para guardarlo en tu portapapeles, o en <strong>"Descargar Archivo"</strong> si prefieres tener el archivo <code>.html</code>.
              </p>
            </div>
          </div>

          <div class="d-flex gap-3 mb-3">
            <div class="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
              3
            </div>
            <div>
              <h6 class="fw-bold mb-1">Entra a Chaturbate</h6>
              <p class="text-muted small mb-0">
                Inicia sesión en tu cuenta, dirígete a tu sala y abre la sección <strong>"Editar Biografía"</strong> o <strong>"Profile Details"</strong>.
              </p>
            </div>
          </div>

          <div class="d-flex gap-3">
            <div class="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
              4
            </div>
            <div>
              <h6 class="fw-bold mb-1">Pega el código en el editor</h6>
              <p class="text-muted small mb-0">
                Activa la vista de código HTML en el editor (busca el botón de código fuente <code>&lt;/&gt;</code>) y pega el contenido. Guarda los cambios y tu nuevo perfil estará listo.
              </p>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end gap-2 border-top pt-3">
          <button type="button" class="btn btn-primary btn-sm px-4" @click="closeGuideModal">
            Entendido
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  IconHeartFilled,
  IconBrandGithub,
  IconArrowUp,
  IconChevronRight,
  IconHelpCircle,
  IconSparkles,
  IconCode,
  IconWorld,
  IconExternalLink,
  IconShieldCheck,
} from '@tabler/icons-vue'

export default {
  name: 'MainFooter',
  components: {
    IconHeartFilled,
    IconBrandGithub,
    IconArrowUp,
    IconChevronRight,
    IconHelpCircle,
    IconSparkles,
    IconCode,
    IconWorld,
    IconExternalLink,
    IconShieldCheck,
  },
  data() {
    return {
      showGuideModal: false,
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
    document.body.style.overflow = ''
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    openGuideModal() {
      this.showGuideModal = true
      document.body.style.overflow = 'hidden'
    },
    closeGuideModal() {
      this.showGuideModal = false
      document.body.style.overflow = ''
    },
    handleKeydown(e) {
      if (e.key === 'Escape' && this.showGuideModal) {
        this.closeGuideModal()
      }
    },
  },
}
</script>

<style scoped>
.site-footer {
  background-color: #15181c !important;
  color: #94a3b8;
  font-size: 0.875rem;
}

.brand-icon-box {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.letter-spacing-1 {
  letter-spacing: 0.06em;
}

.badge-subtle-dark {
  background-color: rgba(255, 255, 255, 0.06);
  font-weight: 500;
  font-size: 0.72rem;
  padding: 0.35rem 0.65rem;
}

.status-indicator {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10b981;
  margin-right: 4px;
  box-shadow: 0 0 8px #10b981;
}

.footer-nav-list li {
  line-height: 1.6;
}

.footer-link {
  color: #94a3b8;
  transition: color 0.15s ease, transform 0.15s ease;
}

.footer-link:hover {
  color: #ff6000;
  transform: translateX(2px);
}

.developer-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-color: rgba(255, 255, 255, 0.2);
  color: #cbd5e1;
  transition: all 0.2s ease;
}

.developer-badge:hover {
  background-color: rgba(255, 255, 255, 0.12);
  border-color: #ff6000;
  color: #fff;
}

.scroll-top-btn {
  font-size: 0.75rem;
  padding: 0.3rem 0.7rem;
  transition: all 0.2s ease;
}

.scroll-top-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ff6000;
  border-color: #ff6000 !important;
}

.disclaimer-text {
  font-size: 0.75rem;
  line-height: 1.5;
  color: #64748b !important;
}

.link-emamut {
  color: #f8fafc;
  transition: color 0.2s ease;
}

.link-emamut:hover {
  color: #ff6000 !important;
}

.heart-pulse {
  animation: pulse 1.8s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Modal Custom Styling */
.modal-backdrop-custom {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 1060;
}

.modal-dialog-custom {
  width: 100%;
  max-width: 540px;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  animation: modalFadeIn 0.2s ease-out;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.step-number {
  width: 28px;
  height: 28px;
  font-size: 0.85rem;
  font-weight: 700;
}
</style>
