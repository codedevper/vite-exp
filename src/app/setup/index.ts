let counter = 0

export function setupCounter(element: HTMLButtonElement) {
  element.addEventListener('click', () => {
    counter++
    element.innerHTML = `UI Loading...`
    setTimeout(() => {
      window.location.href = '/html/'
    }, 3000);
  })

  element.innerHTML = `Click Me!`
}

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
}
