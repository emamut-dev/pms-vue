<template>
  <form @submit.prevent="handleDownloadFile">
    <!-- Sección 1: Imágenes del Perfil -->
    <div class="card card-custom p-4 mb-4">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h3 class="section-title mb-0">1. Imágenes del Perfil</h3>
        <small class="text-muted">Formatos recomendados: PNG, JPG, WebP</small>
      </div>

      <div class="row g-3">
        <!-- Imagen de Fondo -->
        <div class="col-md-6">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="small fw-semibold text-secondary">Fondo de Perfil</span>
            <div>
              <span
                v-if="imageStatus.imgFondo === 'loading'"
                class="badge bg-secondary-subtle text-secondary border border-secondary-subtle d-inline-flex align-items-center gap-1"
              >
                <span class="spinner-border spinner-border-sm" style="width: 10px; height: 10px"></span> Cargando
              </span>
              <span
                v-else-if="imageStatus.imgFondo === 'success'"
                class="badge bg-success-subtle text-success border border-success-subtle d-inline-flex align-items-center gap-1"
              >
                <IconCheck :size="12" /> Lista
              </span>
              <span
                v-else-if="imageStatus.imgFondo === 'error'"
                class="badge bg-danger-subtle text-danger border border-danger-subtle d-inline-flex align-items-center gap-1"
              >
                <IconAlertCircle :size="12" /> Error de carga
              </span>
            </div>
          </div>
          <div class="input-group">
            <span class="input-group-text"><IconLayersSelectedBottom /></span>
            <div class="form-floating flex-grow-1">
              <input
                type="url"
                class="form-control"
                id="img-fondo"
                aria-describedby="background-url"
                v-model="formData.imgFondo"
                placeholder="https://example.com/imagen-fondo.png"
              />
              <label for="img-fondo">URL imagen de fondo</label>
            </div>
            <button
              type="button"
              class="btn btn-outline-secondary"
              title="Subir archivo local para prueba"
              @click="$refs.fondoFileInput.click()"
            >
              <IconUpload :size="16" />
            </button>
            <input
              type="file"
              ref="fondoFileInput"
              accept="image/*"
              class="d-none"
              @change="onFileSelected($event, 'imgFondo')"
            />
          </div>
          <small v-if="isLocalFile.imgFondo" class="text-warning-emphasis d-block mt-1">
            ℹ️ Imagen local cargada para previsualización. Para el perfil público en Chaturbate, usa una URL pública.
          </small>
        </div>

        <!-- Imagen Superior / Banner -->
        <div class="col-md-6">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="small fw-semibold text-secondary">Banner Frontal / Contenido</span>
            <div>
              <span
                v-if="imageStatus.imgFront === 'loading'"
                class="badge bg-secondary-subtle text-secondary border border-secondary-subtle d-inline-flex align-items-center gap-1"
              >
                <span class="spinner-border spinner-border-sm" style="width: 10px; height: 10px"></span> Cargando
              </span>
              <span
                v-else-if="imageStatus.imgFront === 'success'"
                class="badge bg-success-subtle text-success border border-success-subtle d-inline-flex align-items-center gap-1"
              >
                <IconCheck :size="12" /> Lista
              </span>
              <span
                v-else-if="imageStatus.imgFront === 'error'"
                class="badge bg-danger-subtle text-danger border border-danger-subtle d-inline-flex align-items-center gap-1"
              >
                <IconAlertCircle :size="12" /> Error de carga
              </span>
            </div>
          </div>
          <div class="input-group">
            <span class="input-group-text"><IconLayersSelected /></span>
            <div class="form-floating flex-grow-1">
              <input
                type="url"
                class="form-control"
                id="img-superior"
                aria-describedby="front-url"
                placeholder="https://example.com/imagen-superior.png"
                v-model="formData.imgFront"
              />
              <label for="img-superior">URL imagen superior / banner</label>
            </div>
            <button
              type="button"
              class="btn btn-outline-secondary"
              title="Subir archivo local para prueba"
              @click="$refs.frontFileInput.click()"
            >
              <IconUpload :size="16" />
            </button>
            <input
              type="file"
              ref="frontFileInput"
              accept="image/*"
              class="d-none"
              @change="onFileSelected($event, 'imgFront')"
            />
          </div>
          <small v-if="isLocalFile.imgFront" class="text-warning-emphasis d-block mt-1">
            ℹ️ Imagen local cargada para previsualización. Para el perfil público en Chaturbate, usa una URL pública.
          </small>
        </div>
      </div>
    </div>

    <!-- Sección 2: Redes Sociales y Enlaces -->
    <div class="card card-custom p-4 mb-4">
      <h3 class="section-title">2. Redes Sociales y Enlaces</h3>
      <div class="row g-3">
        <div class="col-md-6">
          <div class="input-group">
            <span class="input-group-text"><IconBrandX /></span>
            <div class="form-floating flex-grow-1">
              <input
                type="url"
                class="form-control"
                id="x-url"
                aria-describedby="x-url"
                placeholder="https://x.com/usuario"
                v-model="formData.xURL"
              />
              <label for="x-url">URL de X (Twitter)</label>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-group">
            <span class="input-group-text"><IconBrandAmazon /></span>
            <div class="form-floating flex-grow-1">
              <input
                type="url"
                class="form-control"
                id="amazon-url"
                aria-describedby="amazon-url"
                placeholder="https://www.amazon.com/hz/wishlist/ls/..."
                v-model="formData.amazonURL"
              />
              <label for="amazon-url">URL de Amazon Wishlist</label>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-group">
            <span class="input-group-text"><IconBrandInstagram /></span>
            <div class="form-floating flex-grow-1">
              <input
                type="url"
                class="form-control"
                id="instagram-url"
                aria-describedby="instagram-url"
                placeholder="https://www.instagram.com/usuario"
                v-model="formData.instagramURL"
              />
              <label for="instagram-url">URL de Instagram</label>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-group">
            <span class="input-group-text"><IconFlame /></span>
            <div class="form-floating flex-grow-1">
              <input
                type="url"
                class="form-control"
                id="lovense-url"
                aria-describedby="lovense-url"
                placeholder="https://www.lovense.com/..."
                v-model="formData.lovenseURL"
              />
              <label for="lovense-url">URL de Lovense</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección 3: Personalización y Exportación -->
    <div class="card card-custom p-4 mb-4">
      <h3 class="section-title">3. Personalización y Exportación</h3>
      <div class="row g-3 align-items-center">
        <div class="col-md-5">
          <div class="input-group">
            <span class="input-group-text"><IconPalette /></span>
            <select
              id="icons-color"
              class="form-select"
              v-model="formData.iconsColor"
            >
              <option value="golden">Paleta: Dorado</option>
              <option value="silver">Paleta: Plateado</option>
              <option value="pink">Paleta: Rosado</option>
            </select>
          </div>
        </div>
        <div class="col-md-7">
          <div class="d-flex gap-2">
            <button
              class="btn btn-outline-primary flex-fill d-flex align-items-center justify-content-center gap-2"
              @click="handleCopyHtml"
              type="button"
            >
              <component :is="isCopied ? 'IconCheck' : 'IconCopy'" :size="18" />
              {{ isCopied ? '¡HTML Copiado!' : 'Copiar HTML' }}
            </button>
            <button
              class="btn btn-success flex-fill d-flex align-items-center justify-content-center gap-2"
              @click="handleDownloadFile"
              type="button"
            >
              <IconCloudDownload :size="18" />
              Descargar .txt
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import {
  IconCloudDownload,
  IconLayersSelectedBottom,
  IconLayersSelected,
  IconBrandX,
  IconBrandAmazon,
  IconBrandInstagram,
  IconFlame,
  IconPalette,
  IconCopy,
  IconCheck,
  IconUpload,
  IconAlertCircle,
} from '@tabler/icons-vue'
import { useProfile1Store } from '@/stores/profile1'
import { downloadFile } from '../utils/downloadFile'

export default {
  data() {
    return {
      isCopied: false,
      copyTimeout: null,
      imageStatus: {
        imgFondo: 'loading',
        imgFront: 'loading',
      },
      isLocalFile: {
        imgFondo: false,
        imgFront: false,
      },
    }
  },
  setup() {
    const store = useProfile1Store()
    return {
      formData: store.formData,
      socialNetworksIcons: store.socialNetworksIcons,
    }
  },
  components: {
    IconCloudDownload,
    IconLayersSelectedBottom,
    IconLayersSelected,
    IconBrandX,
    IconBrandAmazon,
    IconBrandInstagram,
    IconFlame,
    IconPalette,
    IconCopy,
    IconCheck,
    IconUpload,
    IconAlertCircle,
  },
  watch: {
    'formData.imgFondo'(newVal) {
      this.verifyImage(newVal, 'imgFondo')
    },
    'formData.imgFront'(newVal) {
      this.verifyImage(newVal, 'imgFront')
    },
  },
  mounted() {
    this.verifyImage(this.formData.imgFondo, 'imgFondo')
    this.verifyImage(this.formData.imgFront, 'imgFront')
  },
  methods: {
    verifyImage(url, key) {
      if (!url) {
        this.imageStatus[key] = 'error'
        return
      }
      this.imageStatus[key] = 'loading'
      const img = new Image()
      img.decoding = 'async'
      img.onload = () => {
        this.imageStatus[key] = 'success'
      }
      img.onerror = () => {
        this.imageStatus[key] = 'error'
      }
      img.src = url
    },
    onFileSelected(event, key) {
      const file = event.target.files?.[0]
      if (!file) return

      const reader = new FileReader()
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          this.formData[key] = e.target.result
          this.isLocalFile[key] = true
        }
      }
      reader.readAsDataURL(file)
      // Reset input para permitir volver a cargar el mismo archivo si se desea
      event.target.value = ''
    },
    generateHtml() {
      const color = this.formData.iconsColor || 'golden'
      const icons = this.socialNetworksIcons[color] || this.socialNetworksIcons.golden

      return `<tr style="font-size:14px;font-weight:400;line-height:15px;vertical-align:top;text-align:left"><td style="font-size:14px;line-height:16px"><div><p style="display:unset"></p><ul style="background-image:url(${this.formData.imgFondo}); background-attachment:fixed; background-repeat:no-repeat; background-size:cover; margin-left:-15em; margin-right:-10em; padding-bottom:35em; padding-left:10em" ><br><img src="${this.formData.imgFront}" style="width:60%;margin-left:20%"><br><p style="text-align:left;line-height:0;width:700px;height:100px;margin:45px 0 0 41%"> <br> <br> <font style="float:left;background-color:rgba(255,255,255,0);height:100px;overflow-y:hide;overflow-x:hide;width:700px;padding:0;display:block;margin:10px 0 0 -64px"> <br> <a href="${this.formData.xURL}" rel="nofollow" target="_blank"> <img src="${icons.x}" style="margin:0 auto;float:left;width:12%"> </a> <br> <a href="${this.formData.amazonURL}" rel="nofollow" target="_blank"> <img src="${icons.amazon}" style="margin:0 0 0 60px;float:left;width:12%"> </a> <br> <a href="${this.formData.instagramURL}" rel="nofollow" target="_blank"> <img src="${icons.instagram}" style="margin:0 0 0 60px;float:left;width:12%"> </a> <br> <br> <a href="${this.formData.lovenseURL}" rel="nofollow" target="_blank"> <img src="${icons.lovense}" style="margin:0 0 0 60px;float:left;width:12%"> </a> <br> </font> <br> </p> </ul> <p></p> </div> </td> </tr>`
    },
    handleDownloadFile() {
      const textResult = this.generateHtml()
      downloadFile(textResult, 'profile1-chaturbate.txt')
    },
    async handleCopyHtml() {
      const textResult = this.generateHtml()
      try {
        await navigator.clipboard.writeText(textResult)
        this.isCopied = true
        if (this.copyTimeout) clearTimeout(this.copyTimeout)
        this.copyTimeout = setTimeout(() => {
          this.isCopied = false
        }, 2000)
      } catch {
        // En caso de fallo con Clipboard API, descargar como alternativa
        this.handleDownloadFile()
      }
    },
  },
  beforeUnmount() {
    if (this.copyTimeout) clearTimeout(this.copyTimeout)
  },
}
</script>
