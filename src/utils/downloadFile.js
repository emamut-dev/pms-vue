/**
 * Descarga un archivo de texto en el navegador del usuario y libera los recursos en memoria.
 * @param {string} textResult - Contenido de texto a descargar.
 * @param {string} fileName - Nombre del archivo de salida.
 */
export function downloadFile(textResult, fileName) {
  const file = new Blob([textResult], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(file)
  const element = document.createElement('a')

  element.href = url
  element.download = fileName
  element.style.display = 'none'

  document.body.appendChild(element)
  element.click()

  document.body.removeChild(element)
  URL.revokeObjectURL(url)
}

// Alias para compatibilidad hacia atrás
export const DownloadFile = downloadFile
