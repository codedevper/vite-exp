let counter = 0

export function setupCounter(element: HTMLButtonElement) {
  element.addEventListener('click', () => {
    counter++
    element.innerHTML = `Count is ${counter}`
  })
  
  element.innerHTML = `Count is ${counter}`
}

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
}
