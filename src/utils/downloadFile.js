export async function DownloadFile(textResult, fileName) {
  const element = document.createElement('a')
  const file = new Blob([textResult], { type: 'text/plain' })

  element.href = URL.createObjectURL(file)
  element.download = fileName

  document.body.appendChild(element)

  element.click()
}
