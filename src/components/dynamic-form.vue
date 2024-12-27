<template>
  <form>
    <div v-for="(field, index) in fields" :key="index" class="mb-3 mt-5">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          v-model="field.value"
          :placeholder="'Campo ' + (index + 1)"
        />
        <button type="button" class="btn btn-success" @click="addField(index)">+</button>
        <button
          type="button"
          class="btn btn-danger"
          @click="removeField(index)"
          :disabled="fields.length === 1"
        >
          −
        </button>
      </div>
    </div>
  </form>
  <button type="button" class="btn btn-primary mt-3" @click="submitForm">Enviar</button>
  <div class="mt-4">
    <h4>Datos enviados:</h4>
    <pre>{{ submittedData }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { value: '' }, // Campo inicial
      ],
      submittedData: null, // Para almacenar los datos enviados
    }
  },
  methods: {
    addField(index) {
      // Agregar un nuevo campo después del actual
      this.fields.splice(index + 1, 0, { value: '' })
    },
    removeField(index) {
      // Eliminar el campo seleccionado
      this.fields.splice(index, 1)
    },
    submitForm() {
      // Capturar los datos del formulario
      this.submittedData = this.fields.map((field) => field.value)
    },
  },
}
</script>
